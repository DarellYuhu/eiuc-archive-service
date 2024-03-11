import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordGroupService } from './record-group.service';
import { CreateRecordGroupDto } from './dto/create-record-group.dto';
import { UpdateRecordGroupDto } from './dto/update-record-group.dto';

@Controller('record-group')
export class RecordGroupController {
  constructor(private readonly recordGroupService: RecordGroupService) {}

  @Post()
  create(@Body() createRecordGroupDto: CreateRecordGroupDto) {
    return this.recordGroupService.create(createRecordGroupDto);
  }

  @Get()
  findAll() {
    return this.recordGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordGroupDto: UpdateRecordGroupDto) {
    return this.recordGroupService.update(+id, updateRecordGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordGroupService.remove(+id);
  }
}
