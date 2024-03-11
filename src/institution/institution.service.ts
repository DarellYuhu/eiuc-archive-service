import { Injectable } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstitutionService {
  constructor(private prisma: PrismaService) {}
  create(createInstitutionDto: CreateInstitutionDto) {
    return 'This action adds a new institution';
  }

  findAll() {
    return this.prisma.institution.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} institution`;
  }

  update(id: number, updateInstitutionDto: UpdateInstitutionDto) {
    return `This action updates a #${id} institution`;
  }

  remove(id: number) {
    return `This action removes a #${id} institution`;
  }
}
