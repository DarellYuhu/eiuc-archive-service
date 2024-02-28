import { HttpException, Injectable } from '@nestjs/common';
import { CreateAdministrationDto } from './dto/create-administration.dto';
import { UpdateAdministrationDto } from './dto/update-administration.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdministrationService {
  constructor(private prisma: PrismaService) {}

  create(createAdministrationDto: CreateAdministrationDto) {
    const { gambar, ...rest } = createAdministrationDto;
    return this.prisma.administrasi.create({
      data: {
        gambar: gambar.path,
        ...rest,
      },
    });
  }

  async findAll(search: string) {
    const insensitiveContains = (field: string) => ({
      [field]: { contains: search, mode: 'insensitive' },
    });
    const fields = ['asal', 'noLaci', 'topik', 'tahun'];
    const codeFields = ['nama', 'code'];

    const data = await this.prisma.administrasi.findMany({
      where: {
        OR: [
          ...fields.map(insensitiveContains),
          ...codeFields.map((field) => ({ Code: insensitiveContains(field) })),
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

  update(id: number, updateAdministrationDto: UpdateAdministrationDto) {
    return `This action updates a #${id} administration`;
  }

  remove(id: number) {
    return `This action removes a #${id} administration`;
  }
}
