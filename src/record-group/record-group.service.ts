import { Injectable } from '@nestjs/common';
import { CreateRecordGroupDto } from './dto/create-record-group.dto';
import { UpdateRecordGroupDto } from './dto/update-record-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecordGroupService {
  constructor(private prisma: PrismaService) {}

  create(createRecordGroupDto: CreateRecordGroupDto) {
    return 'This action adds a new recordGroup';
  }

  findAll() {
    return this.prisma.recordGroup.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} recordGroup`;
  }

  update(id: number, updateRecordGroupDto: UpdateRecordGroupDto) {
    return `This action updates a #${id} recordGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} recordGroup`;
  }
}
