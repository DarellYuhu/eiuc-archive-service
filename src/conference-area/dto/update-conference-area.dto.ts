import { PartialType } from '@nestjs/mapped-types';
import { CreateConferenceAreaDto } from './create-conference-area.dto';

export class UpdateConferenceAreaDto extends PartialType(CreateConferenceAreaDto) {}
