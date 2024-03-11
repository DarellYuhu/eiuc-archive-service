import { Module } from '@nestjs/common';
import { ConferenceAreaService } from './conference-area.service';
import { ConferenceAreaController } from './conference-area.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ConferenceAreaController],
  providers: [ConferenceAreaService],
})
export class ConferenceAreaModule {}
