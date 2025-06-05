import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnerEarningDto } from './create-owner_earning.dto';

export class UpdateOwnerEarningDto extends PartialType(CreateOwnerEarningDto) {}
