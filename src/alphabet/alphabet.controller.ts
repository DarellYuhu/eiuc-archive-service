import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlphabetService } from './alphabet.service';
import { CreateAlphabetDto } from './dto/create-alphabet.dto';
import { UpdateAlphabetDto } from './dto/update-alphabet.dto';

@Controller('alphabet')
export class AlphabetController {
  constructor(private readonly alphabetService: AlphabetService) {}

  @Post()
  create(@Body() createAlphabetDto: CreateAlphabetDto) {
    return this.alphabetService.create(createAlphabetDto);
  }

  @Get()
  findAll() {
    return this.alphabetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alphabetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlphabetDto: UpdateAlphabetDto) {
    return this.alphabetService.update(+id, updateAlphabetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alphabetService.remove(+id);
  }
}
