import { Module } from '@nestjs/common';
import { SertifikatService } from './sertifikat.service';
import { SertifikatController } from './sertifikat.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SertifikatController],
  providers: [SertifikatService],
})
export class SertifikatModule {}
