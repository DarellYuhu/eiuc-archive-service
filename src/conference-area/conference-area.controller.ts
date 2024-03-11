import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConferenceAreaService } from './conference-area.service';
import { CreateConferenceAreaDto } from './dto/create-conference-area.dto';
import { UpdateConferenceAreaDto } from './dto/update-conference-area.dto';

@Controller('conference-area')
export class ConferenceAreaController {
  constructor(private readonly conferenceAreaService: ConferenceAreaService) {}

  @Post()
  create(@Body() createConferenceAreaDto: CreateConferenceAreaDto) {
    return this.conferenceAreaService.create(createConferenceAreaDto);
  }

  @Get()
  findAll() {
    return this.conferenceAreaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conferenceAreaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConferenceAreaDto: UpdateConferenceAreaDto) {
    return this.conferenceAreaService.update(+id, updateConferenceAreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conferenceAreaService.remove(+id);
  }
}
