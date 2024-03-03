import { HttpException, Injectable } from '@nestjs/common';
import { CreateServiceRecordDto } from './dto/create-service-record.dto';
import { UpdateServiceRecordDto } from './dto/update-service-record.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Status } from '@prisma/client';

@Injectable()
export class ServiceRecordService {
  constructor(private prisma: PrismaService) {}
  create(createServiceRecordDto: CreateServiceRecordDto) {
    const { gambar, ...rest } = createServiceRecordDto;
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
      return prisma.serviceRecord.create({
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
    const mainFields = ['nama', 'keterangan', 'noLaci'];
    const institusiFields = ['namaInstitusi'];

    const data = await this.prisma.serviceRecord.findMany({
      where: {
        OR: [
          {
            status: Status[search as keyof typeof Status],
          },
          ...mainFields.map(insensitiveContains),
          ...institusiFields.map((field) => ({
            Institusi: insensitiveContains(field),
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
    return `This action returns a #${id} serviceRecord`;
  }

  update(id: string, updateServiceRecordDto: UpdateServiceRecordDto) {
    const { gambar, ...rest } = updateServiceRecordDto;
    return this.prisma.$transaction(async (prisma) => {
      let fileId: string | undefined = undefined;
      const prevFile = await prisma.serviceRecord.findUnique({
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
      return prisma.serviceRecord.update({
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
      const sertifikat = await prisma.serviceRecord.delete({
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
