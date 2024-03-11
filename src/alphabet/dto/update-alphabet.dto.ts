import { PartialType } from '@nestjs/mapped-types';
import { CreateAlphabetDto } from './create-alphabet.dto';

export class UpdateAlphabetDto extends PartialType(CreateAlphabetDto) {}
