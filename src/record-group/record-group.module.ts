import { Module } from '@nestjs/common';
import { RecordGroupService } from './record-group.service';
import { RecordGroupController } from './record-group.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RecordGroupController],
  providers: [RecordGroupService],
})
export class RecordGroupModule {}
