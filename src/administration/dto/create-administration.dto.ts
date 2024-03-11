import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAdministrationDto {
  @IsNotEmpty()
  @IsString()
  recordGroupId: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  dateSpanOfRecord?: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsOptional()
  @IsNumber({ allowNaN: true })
  @Transform(({ value }) => parseInt(value))
  retantionSchedule?: number;

  @IsOptional()
  gambar?: Express.Multer.File;
}
