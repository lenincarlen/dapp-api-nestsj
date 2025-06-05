import { IsString, IsNotEmpty, IsUUID, IsOptional, IsNumber, IsEnum, IsDateString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export enum PaymentStatus {
  PENDING = 'pending',
  PAID = 'paid',
  FAILED = 'failed',
  REFUNDED = 'refunded',
}

class PaymentHistoryDto {
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  event: string; // e.g., 'created', 'payment_intent.succeeded', 'charge.refunded'

  @IsOptional()
  @IsString()
  details?: string;
}

export class CreatePaymentDto {
  @IsUUID()
  @IsNotEmpty()
  contract_id: string;

  @IsUUID()
  @IsNotEmpty()
  rent_id: string;

  @IsUUID()
  @IsNotEmpty()
  tenant_id: string;

  @IsUUID()
  @IsNotEmpty()
  owner_id: string;

  @IsUUID()
  @IsNotEmpty()
  property_id: string;

  @IsOptional()
  @IsString()
  stripe_session_id?: string | null;

  @IsOptional()
  @IsString()
  stripe_payment_intent?: string | null;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  currency: string; // e.g., USD, EUR

  @IsEnum(PaymentStatus)
  @IsNotEmpty()
  status: PaymentStatus;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PaymentHistoryDto)
  payment_history?: PaymentHistoryDto[] | null;
}