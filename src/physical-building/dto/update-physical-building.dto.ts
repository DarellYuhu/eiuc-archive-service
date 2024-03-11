import { PartialType } from '@nestjs/mapped-types';
import { CreatePhysicalBuildingDto } from './create-physical-building.dto';

export class UpdatePhysicalBuildingDto extends PartialType(CreatePhysicalBuildingDto) {}
