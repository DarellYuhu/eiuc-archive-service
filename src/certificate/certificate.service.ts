import { HttpException, Injectable } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CertificateType } from '@prisma/client';

@Injectable()
export class CertificateService {
  constructor(private prisma: PrismaService) {}

  create(createCertificateDto: CreateCertificateDto) {
    const { gambar, ...rest } = createCertificateDto;
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
      return prisma.certificate.create({
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
      'congregation',
      'certificate',
      'value',
      'description',
      'location',
    ];
    const conferenceAreaFields = ['conferenceAreaName'];
    const physicalBuildingFields = ['physicalName'];

    const data = await this.prisma.certificate.findMany({
      where: {
        OR: [
          {
            type: CertificateType[
              search?.toLowerCase() as keyof typeof CertificateType
            ],
          },
          ...mainFields.map(insensitiveContains),
          ...conferenceAreaFields.map((field) => ({
            ConferenceArea: insensitiveContains(field),
          })),
          ...physicalBuildingFields.map((field) => ({
            PhysicalBuilding: insensitiveContains(field),
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
    return `This action returns a #${id} certificate`;
  }

  update(id: string, updateCertificateDto: UpdateCertificateDto) {
    const { gambar, ...rest } = updateCertificateDto;
    return this.prisma.$transaction(async (prisma) => {
      let fileId: string | undefined = undefined;
      const prevFile = await prisma.certificate.findUnique({
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
      return prisma.certificate.update({
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
      const sertifikat = await prisma.certificate.delete({
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
