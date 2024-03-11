import { HttpException, Injectable } from '@nestjs/common';
import { CreateAdministrationDto } from './dto/create-administration.dto';
import { UpdateAdministrationDto } from './dto/update-administration.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdministrationService {
  constructor(private prisma: PrismaService) {}

  create(createAdministrationDto: CreateAdministrationDto) {
    const { gambar, ...rest } = createAdministrationDto;
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
      return prisma.administration.create({
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
    const fields = ['author', 'location', 'description', 'dateSpanOfRecord'];
    const codeFields = ['name', 'recordGroup'];

    const data = await this.prisma.administration.findMany({
      where: {
        OR: [
          ...fields.map(insensitiveContains),
          ...codeFields.map((field) => ({
            RecordGroup: insensitiveContains(field),
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
    return `This action returns a #${id} administration`;
  }

  update(id: string, updateAdministrationDto: UpdateAdministrationDto) {
    const { gambar, ...rest } = updateAdministrationDto;
    return this.prisma.$transaction(async (prisma) => {
      let fileId: string | undefined = undefined;
      const prevFile = await prisma.administration.findUnique({
        where: {
          id: id,
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
      return prisma.administration.update({
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
      const administration = await prisma.administration.delete({
        where: {
          id,
        },
      });

      if (administration.fileId) {
        await prisma.file.delete({
          where: {
            id: administration.fileId,
          },
        });
      }
    });
  }
}
