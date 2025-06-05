import { IsString, MinLength, IsEmail, IsOptional, IsArray, IsNumber, IsEnum } from 'class-validator';

// Podrías definir un enum para status si tienes valores predefinidos
export enum OwnerStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
}

export class CreateOwnerDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @MinLength(2)
  last_name: string;

  @IsEmail()
  email: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  properties?: string[]; // IDs de las propiedades

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  contracts?: string[]; // IDs de los contratos

  @IsNumber()
  @IsOptional()
  earnings?: number;

  @IsEnum(OwnerStatus)
  @IsOptional()
  status?: OwnerStatus;
}