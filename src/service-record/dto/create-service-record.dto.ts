import { Status } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateServiceRecordDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(Status)
  status: Status;

  @IsString()
  @IsNotEmpty()
  institusiId: string;

  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsOptional()
  keterangan?: string;

  @IsString()
  @IsNotEmpty()
  noLaci: string;

  @IsOptional()
  gambar: Express.Multer.File;
}
