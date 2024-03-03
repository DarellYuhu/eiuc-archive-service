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
import { RetirementService } from './retirement.service';
import { CreateRetirementDto } from './dto/create-retirement.dto';
import { UpdateRetirementDto } from './dto/update-retirement.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('retirement')
export class RetirementController {
  constructor(private readonly retirementService: RetirementService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('gambar', {
      storage: diskStorage({
        destination: './public/uploads/retirement',
        filename: (_, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          return cb(null, filename);
        },
      }),
    }),
  )
  create(
    @Body() createRetirementDto: CreateRetirementDto,
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
    return this.retirementService.create({ ...createRetirementDto, gambar });
  }

  @Get()
  findAll(@Query('search') Search: string) {
    return this.retirementService.findAll(Search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.retirementService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('gambar', {
      storage: diskStorage({
        destination: './public/uploads/retirement',
        filename: (_, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          return cb(null, filename);
        },
      }),
    }),
  )
  update(
    @Param('id') id: string,
    @Body() updateRetirementDto: UpdateRetirementDto,
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
    return this.retirementService.update(id, {
      ...updateRetirementDto,
      gambar,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.retirementService.remove(id);
  }
}
