import { HttpException, Injectable } from '@nestjs/common';
import { CreateSertifikatDto } from './dto/create-sertifikat.dto';
import { UpdateSertifikatDto } from './dto/update-sertifikat.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JenisSertifikat, JenisSurat } from '@prisma/client';

@Injectable()
export class SertifikatService {
  constructor(private prisma: PrismaService) {}
  create(createSertifikatDto: CreateSertifikatDto) {
    const { gambar, ...rest } = createSertifikatDto;
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
      return prisma.sertifikat.create({
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
    const mainFields = [
      'jemaat',
      'sertifikat',
      'value',
      'keterangan',
      'noLaci',
    ];
    const daerahKonfrensFields = ['namaDaerahKonfrens'];
    const fisikBangunanFields = ['namaFisik'];

    const data = await this.prisma.sertifikat.findMany({
      where: {
        OR: [
          {
            jenis:
              JenisSertifikat[
                search.toLowerCase() as keyof typeof JenisSertifikat
              ],
          },
          ...mainFields.map(insensitiveContains),
          ...daerahKonfrensFields.map((field) => ({
            DaerahKonfrens: insensitiveContains(field),
          })),
          ...fisikBangunanFields.map((field) => ({
            FisikBangunan: insensitiveContains(field),
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
    return `This action returns a #${id} sertifikat`;
  }

  update(id: string, updateSertifikatDto: UpdateSertifikatDto) {
    const { gambar, ...rest } = updateSertifikatDto;
    return this.prisma.$transaction(async (prisma) => {
      let fileId: string | undefined = undefined;
      const prevFile = await prisma.sertifikat.findUnique({
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
      return prisma.sertifikat.update({
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
      const sertifikat = await prisma.sertifikat.delete({
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
