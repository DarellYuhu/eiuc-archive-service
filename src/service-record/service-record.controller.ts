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
import { ServiceRecordService } from './service-record.service';
import { CreateServiceRecordDto } from './dto/create-service-record.dto';
import { UpdateServiceRecordDto } from './dto/update-service-record.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('service-record')
export class ServiceRecordController {
  constructor(private readonly serviceRecordService: ServiceRecordService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('gambar', {
      storage: diskStorage({
        destination: './public/uploads/service-record',
        filename: (_, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          return cb(null, filename);
        },
      }),
    }),
  )
  create(
    @Body() createServiceRecordDto: CreateServiceRecordDto,
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
    return this.serviceRecordService.create({
      ...createServiceRecordDto,
      gambar,
    });
  }

  @Get()
  findAll(@Query('search') search: string) {
    return this.serviceRecordService.findAll(search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceRecordService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('gambar', {
      storage: diskStorage({
        destination: './public/uploads/service-record',
        filename: (_, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          return cb(null, filename);
        },
      }),
    }),
  )
  update(
    @Param('id') id: string,
    @Body() updateServiceRecordDto: UpdateServiceRecordDto,
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
    return this.serviceRecordService.update(id, {
      ...updateServiceRecordDto,
      gambar,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceRecordService.remove(id);
  }
}
