import { Module } from '@nestjs/common';
import { RetirementService } from './retirement.service';
import { RetirementController } from './retirement.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RetirementController],
  providers: [RetirementService],
})
export class RetirementModule {}
