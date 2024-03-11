import { CertificateType } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCertificateDto {
  @IsString()
  @IsNotEmpty()
  conferenceAreaId: string;

  @IsString()
  @IsNotEmpty()
  congregation: string;

  @IsString()
  @IsOptional()
  certificate?: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(CertificateType)
  type: CertificateType;

  @IsString()
  @IsNotEmpty()
  physicalBuildingId: string;

  @IsString()
  @IsOptional()
  value?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsOptional()
  gambar: Express.Multer.File;
}
