import { Module } from '@nestjs/common';
import { NumberService } from './number.service';
import { NumberController } from './number.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NumberController],
  providers: [NumberService],
})
export class NumberModule {}
