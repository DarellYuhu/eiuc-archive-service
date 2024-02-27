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
} from '@nestjs/common';
import { AdministrationService } from './administration.service';
import { CreateAdministrationDto } from './dto/create-administration.dto';
import { UpdateAdministrationDto } from './dto/update-administration.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('administration')
export class AdministrationController {
  constructor(private readonly administrationService: AdministrationService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('gambar', {
      storage: diskStorage({
        destination: './public/uploads/administration',
        filename: (_, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          return cb(null, filename);
        },
      }),
    }),
  )
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 20000000 }),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
        ],
        fileIsRequired: false,
      }),
    )
    gambar: Express.Multer.File,
    @Body() createAdministrationDto: CreateAdministrationDto,
  ) {
    return this.administrationService.create({
      ...createAdministrationDto,
      gambar,
    });
  }

  @Get()
  findAll() {
    return this.administrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administrationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdministrationDto: UpdateAdministrationDto,
  ) {
    return this.administrationService.update(+id, updateAdministrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administrationService.remove(+id);
  }
}
