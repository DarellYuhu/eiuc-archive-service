import { Injectable } from '@nestjs/common';
import { CreateNumberDto } from './dto/create-number.dto';
import { UpdateNumberDto } from './dto/update-number.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NumberService {
  constructor(private prisma: PrismaService) {}

  create(createNumberDto: CreateNumberDto) {
    return 'This action adds a new number';
  }

  findAll() {
    return this.prisma.number.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} number`;
  }

  update(id: number, updateNumberDto: UpdateNumberDto) {
    return `This action updates a #${id} number`;
  }

  remove(id: number) {
    return `This action removes a #${id} number`;
  }
}
