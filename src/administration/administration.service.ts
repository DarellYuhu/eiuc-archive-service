import { Injectable } from '@nestjs/common';
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

  findAll() {
    return `This action returns all administration`;
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
