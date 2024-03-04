import { JenisSurat } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateLetterDto {
  @IsString()
  @IsNotEmpty()
  departmentId: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(JenisSurat)
  jenis: JenisSurat;

  @IsString()
  @IsNotEmpty()
  tahun: string;

  @IsString()
  @IsNotEmpty()
  asal: string;

  @IsString()
  @IsOptional()
  topic?: string;

  @IsString()
  @IsNotEmpty()
  noLaci: string;

  @IsOptional()
  gambar?: Express.Multer.File;
}
