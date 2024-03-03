import { Module } from '@nestjs/common';
import { ServiceRecordService } from './service-record.service';
import { ServiceRecordController } from './service-record.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ServiceRecordController],
  providers: [ServiceRecordService],
})
export class ServiceRecordModule {}
