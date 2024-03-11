import { Injectable } from '@nestjs/common';
import { CreateConferenceAreaDto } from './dto/create-conference-area.dto';
import { UpdateConferenceAreaDto } from './dto/update-conference-area.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConferenceAreaService {
  constructor(private prisma: PrismaService) {}

  create(createConferenceAreaDto: CreateConferenceAreaDto) {
    return 'This action adds a new conferenceArea';
  }

  findAll() {
    return this.prisma.conferenceArea.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} conferenceArea`;
  }

  update(id: number, updateConferenceAreaDto: UpdateConferenceAreaDto) {
    return `This action updates a #${id} conferenceArea`;
  }

  remove(id: number) {
    return `This action removes a #${id} conferenceArea`;
  }
}
