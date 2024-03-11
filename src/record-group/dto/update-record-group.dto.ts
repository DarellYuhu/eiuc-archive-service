import { PartialType } from '@nestjs/mapped-types';
import { CreateRecordGroupDto } from './create-record-group.dto';

export class UpdateRecordGroupDto extends PartialType(CreateRecordGroupDto) {}
