import { Module } from '@nestjs/common';
import { PhysicalBuildingService } from './physical-building.service';
import { PhysicalBuildingController } from './physical-building.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PhysicalBuildingController],
  providers: [PhysicalBuildingService],
})
export class PhysicalBuildingModule {}
