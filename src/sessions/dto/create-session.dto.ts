import { IsString, IsNotEmpty, IsUUID, IsIP, IsNumber, IsOptional } from 'class-validator';

export class CreateSessionDto {
  @IsUUID()
  @IsOptional() // Assuming user_id can be optional if session is for anonymous user initially
  user_id?: string;

  @IsIP()
  @IsNotEmpty()
  ip_address: string;

  @IsString()
  @IsNotEmpty()
  user_agent: string;

  @IsString()
  @IsNotEmpty()
  payload: string;

  @IsNumber()
  @IsNotEmpty()
  last_activity: number; // Unix timestamp
}