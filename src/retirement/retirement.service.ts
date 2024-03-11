import { HttpException, Injectable } from '@nestjs/common';
import { CreateRetirementDto } from './dto/create-retirement.dto';
import { UpdateRetirementDto } from './dto/update-retirement.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LetterType, Rate, Status } from '@prisma/client';

@Injectable()
export class RetirementService {
  constructor(private prisma: PrismaService) {}
  create(createRetirementDto: CreateRetirementDto) {
    const { gambar, ...rest } = createRetirementDto;
    return this.prisma.$transaction(async (prisma) => {
      let fileId: string | undefined = undefined;
      if (gambar) {
        const gambarPayload = {
          filename: gambar.filename,
          path: gambar.path,
          mimetype: gambar.mimetype,
          destination: gambar.destination,
        };
        const { id } = await prisma.file.create({
          data: gambarPayload,
        });
        fileId = id;
      }
      return prisma.retirement.create({
        data: {
          fileId,
          ...rest,
        },
      });
    });
  }

  async findAll(search: string) {
    const insensitiveContains = (field: string) => ({
      [field]: { contains: search, mode: 'insensitive' },
    });
    const mainFields = ['name', 'description', 'location'];

    const data = !search
      ? await this.prisma.retirement.findMany()
      : await this.prisma.retirement.findMany({
          where: {
            OR: [
              ...mainFields.map(insensitiveContains),
              { status: Status[search as keyof typeof Status] },
              { rate: Rate[search as keyof typeof Rate] },
            ],
          },
        });

    if (data.length === 0) {
      throw new HttpException('Data not found', 404);
    }
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} retirement`;
  }

  update(id: string, updateRetirementDto: UpdateRetirementDto) {
    const { gambar, ...rest } = updateRetirementDto;
    return this.prisma.$transaction(async (prisma) => {
      let fileId: string | undefined = undefined;
      const prevFile = await prisma.retirement.findUnique({
        where: {
          id,
        },
      });
      if (gambar) {
        if (prevFile?.fileId) {
          await prisma.file.delete({
            where: {
              id: prevFile.fileId,
            },
          });
        }
        const gambarPayload = {
          filename: gambar.filename,
          path: gambar.path,
          mimetype: gambar.mimetype,
          destination: gambar.destination,
        };
        fileId = (
          await prisma.file.create({
            data: gambarPayload,
          })
        ).id;
      }
      return prisma.retirement.update({
        where: {
          id,
        },
        data: {
          fileId,
          ...rest,
        },
      });
    });
  }

  remove(id: string) {
    return this.prisma.$transaction(async (prisma) => {
      const sertifikat = await prisma.retirement.delete({
        where: {
          id,
        },
      });

      if (sertifikat.fileId) {
        await prisma.file.delete({
          where: {
            id: sertifikat.fileId,
          },
        });
      }
    });
  }
}
