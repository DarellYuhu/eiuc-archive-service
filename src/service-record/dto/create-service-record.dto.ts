import { Status } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateServiceRecordDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(Status)
  status: Status;

  @IsString()
  @IsNotEmpty()
  institutionId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsOptional()
  gambar: Express.Multer.File;
}
