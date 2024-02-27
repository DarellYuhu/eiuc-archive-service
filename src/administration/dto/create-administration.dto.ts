import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAdministrationDto {
  @IsNotEmpty()
  @IsString()
  codeId: string;

  @IsNotEmpty()
  @IsString()
  topik: string;

  @IsString()
  @IsOptional()
  tahun?: string;

  @IsString()
  @IsOptional()
  asal?: string;

  @IsNotEmpty()
  @IsString()
  noLaci: string;

  @IsOptional()
  gambar?: Express.Multer.File;
}
