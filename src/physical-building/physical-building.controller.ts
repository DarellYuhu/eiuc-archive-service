import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhysicalBuildingService } from './physical-building.service';
import { CreatePhysicalBuildingDto } from './dto/create-physical-building.dto';
import { UpdatePhysicalBuildingDto } from './dto/update-physical-building.dto';

@Controller('physical-building')
export class PhysicalBuildingController {
  constructor(private readonly physicalBuildingService: PhysicalBuildingService) {}

  @Post()
  create(@Body() createPhysicalBuildingDto: CreatePhysicalBuildingDto) {
    return this.physicalBuildingService.create(createPhysicalBuildingDto);
  }

  @Get()
  findAll() {
    return this.physicalBuildingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.physicalBuildingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhysicalBuildingDto: UpdatePhysicalBuildingDto) {
    return this.physicalBuildingService.update(+id, updatePhysicalBuildingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.physicalBuildingService.remove(+id);
  }
}
