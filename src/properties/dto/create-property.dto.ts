import { IsString, MinLength } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @MinLength(3)
  property_name: string;

  @IsString()
  @MinLength(5)
  address: string;
}