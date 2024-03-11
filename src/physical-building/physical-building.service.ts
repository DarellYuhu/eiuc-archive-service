import { Injectable } from '@nestjs/common';
import { CreatePhysicalBuildingDto } from './dto/create-physical-building.dto';
import { UpdatePhysicalBuildingDto } from './dto/update-physical-building.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PhysicalBuildingService {
  constructor(private prisma: PrismaService) {}

  create(createPhysicalBuildingDto: CreatePhysicalBuildingDto) {
    return 'This action adds a new physicalBuilding';
  }

  findAll() {
    return this.prisma.physicalBuilding.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} physicalBuilding`;
  }

  update(id: number, updatePhysicalBuildingDto: UpdatePhysicalBuildingDto) {
    return `This action updates a #${id} physicalBuilding`;
  }

  remove(id: number) {
    return `This action removes a #${id} physicalBuilding`;
  }
}
