import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NumberService } from './number.service';
import { CreateNumberDto } from './dto/create-number.dto';
import { UpdateNumberDto } from './dto/update-number.dto';

@Controller('number')
export class NumberController {
  constructor(private readonly numberService: NumberService) {}

  @Post()
  create(@Body() createNumberDto: CreateNumberDto) {
    return this.numberService.create(createNumberDto);
  }

  @Get()
  findAll() {
    return this.numberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.numberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNumberDto: UpdateNumberDto) {
    return this.numberService.update(+id, updateNumberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numberService.remove(+id);
  }
}
