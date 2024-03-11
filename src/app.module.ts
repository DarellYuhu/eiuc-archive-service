import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdministrationModule } from './administration/administration.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import configuration from 'config/configuration';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { ServiceRecordModule } from './service-record/service-record.module';
import { RetirementModule } from './retirement/retirement.module';
import { LetterModule } from './letter/letter.module';
import { CertificateModule } from './certificate/certificate.module';

@Module({
  imports: [
    AdministrationModule,
    PrismaModule,
    TasksModule,
    ConfigModule.forRoot({ load: [configuration] }),
    ScheduleModule.forRoot(),
    AuthModule,
    ServiceRecordModule,
    RetirementModule,
    LetterModule,
    CertificateModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
