import { HttpException, Injectable } from '@nestjs/common';
import { CreateLetterDto } from './dto/create-letter.dto';
import { UpdateLetterDto } from './dto/update-letter.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JenisSurat } from '@prisma/client';

@Injectable()
export class LetterService {
  constructor(private prisma: PrismaService) {}
  create(createLetterDto: CreateLetterDto) {
    const { gambar, ...rest } = createLetterDto;
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
      return prisma.surat.create({
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
    const mainFields = ['tahun', 'asal', 'topic', 'noLaci'];
    const departmentFields = ['namaDepartment'];

    const data = await this.prisma.surat.findMany({
      where: {
        OR: [
          {
            jenis: JenisSurat[search?.toUpperCase() as keyof typeof JenisSurat],
          },
          ...mainFields.map(insensitiveContains),
          ...departmentFields.map((field) => ({
            Department: insensitiveContains(field),
          })),
        ],
      },
    });

    if (data.length === 0) {
      throw new HttpException('Data not found', 404);
    }
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} letter`;
  }

  update(id: string, updateLetterDto: UpdateLetterDto) {
    const { gambar, ...rest } = updateLetterDto;
    return this.prisma.$transaction(async (prisma) => {
      let fileId: string | undefined = undefined;
      const prevFile = await prisma.surat.findUnique({
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
      return prisma.surat.update({
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
      const surat = await prisma.surat.delete({
        where: {
          id,
        },
      });

      if (surat.fileId) {
        await prisma.file.delete({
          where: {
            id: surat.fileId,
          },
        });
      }
    });
  }
}
