import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 3) // Assuming country codes are 2 or 3 characters long
  code: string;
}