import { Rate, Status } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRetirementDto {
  @IsString()
  @IsNotEmpty()
  name: string;

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
  description?: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsOptional()
  gambar: Express.Multer.File;
}
