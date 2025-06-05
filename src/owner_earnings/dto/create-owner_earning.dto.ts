import { IsString, IsNotEmpty, IsUUID, IsNumber, IsOptional, IsDateString, IsEnum } from 'class-validator';

export enum EarningStatus {
  PENDING = 'pending',
  PROCESSED = 'processed',
  FAILED = 'failed',
}

export class CreateOwnerEarningDto {
  @IsUUID()
  @IsNotEmpty()
  owner_id: string;

  @IsUUID()
  @IsNotEmpty()
  property_id: string;

  @IsUUID()
  @IsNotEmpty()
  payment_id: string;

  @IsUUID()
  @IsNotEmpty()
  tenant_id: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNumber()
  @IsNotEmpty()
  fee_amount: number;

  @IsNumber()
  @IsNotEmpty()
  net_amount: number;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsEnum(EarningStatus)
  @IsNotEmpty()
  status: EarningStatus;

  @IsString()
  @IsOptional()
  stripe_transfer_id?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  @IsOptional()
  processed_at?: Date;
}