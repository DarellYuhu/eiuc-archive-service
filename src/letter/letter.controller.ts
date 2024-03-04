import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Query,
} from '@nestjs/common';
import { LetterService } from './letter.service';
import { CreateLetterDto } from './dto/create-letter.dto';
import { UpdateLetterDto } from './dto/update-letter.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('letter')
export class LetterController {
  constructor(private readonly letterService: LetterService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('gambar', {
      storage: diskStorage({
        destination: './public/uploads/letter',
        filename: (_, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          return cb(null, filename);
        },
      }),
    }),
  )
  create(
    @Body() createLetterDto: CreateLetterDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 20000000 }),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg|pdf)' }),
        ],
        fileIsRequired: false,
      }),
    )
    gambar: Express.Multer.File,
  ) {
    return this.letterService.create({ ...createLetterDto, gambar });
  }

  @Get()
  findAll(@Query('search') search: string) {
    return this.letterService.findAll(search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.letterService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('gambar', {
      storage: diskStorage({
        destination: './public/uploads/letter',
        filename: (_, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          return cb(null, filename);
        },
      }),
    }),
  )
  update(
    @Param('id') id: string,
    @Body() updateLetterDto: UpdateLetterDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 20000000 }),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg|pdf)' }),
        ],
        fileIsRequired: false,
      }),
    )
    gambar: Express.Multer.File,
  ) {
    return this.letterService.update(id, { ...updateLetterDto, gambar });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.letterService.remove(id);
  }
}
