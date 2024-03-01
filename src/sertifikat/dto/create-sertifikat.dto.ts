import { JenisSertifikat } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSertifikatDto {
  @IsString()
  @IsNotEmpty()
  daerahKonfrensId: string;

  @IsString()
  @IsNotEmpty()
  jemaat: string;

  @IsString()
  @IsOptional()
  sertifikat?: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(JenisSertifikat)
  jenis: JenisSertifikat;

  @IsString()
  @IsNotEmpty()
  fisikBangunanId: string;

  @IsString()
  @IsOptional()
  value?: string;

  @IsString()
  @IsOptional()
  keterangan?: string;

  @IsString()
  @IsNotEmpty()
  noLaci: string;

  @IsOptional()
  gambar: Express.Multer.File;
}
