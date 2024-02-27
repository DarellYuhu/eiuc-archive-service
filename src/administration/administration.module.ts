import { Module } from '@nestjs/common';
import { AdministrationService } from './administration.service';
import { AdministrationController } from './administration.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AdministrationController],
  providers: [AdministrationService],
})
export class AdministrationModule {}
