import { Module } from '@nestjs/common';
import { AlphabetService } from './alphabet.service';
import { AlphabetController } from './alphabet.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AlphabetController],
  providers: [AlphabetService],
})
export class AlphabetModule {}
