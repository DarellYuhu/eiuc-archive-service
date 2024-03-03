import { Rate, Status } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRetirementDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Rate)
  rate: Rate;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;

  @IsString()
  @IsOptional()
  keterangan?: string;

  @IsString()
  @IsNotEmpty()
  noLaci: string;

  @IsOptional()
  gambar: Express.Multer.File;
}
