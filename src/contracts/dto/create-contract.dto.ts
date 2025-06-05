import { IsString, IsNotEmpty, IsUUID, IsDateString, IsNumber, Min, IsEnum, IsOptional } from 'class-validator';

export enum ContractStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  EXPIRED = 'expired',
  TERMINATED = 'terminated',
}

export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  BANK_TRANSFER = 'bank_transfer',
  CASH = 'cash',
  OTHER = 'other',
}

export class CreateContractDto {
  @IsUUID()
  @IsNotEmpty()
  owner_id: string;

  @IsUUID()
  @IsNotEmpty()
  tenant_id: string;

  @IsUUID()
  @IsNotEmpty()
  property_id: string;

  @IsDateString()
  @IsNotEmpty()
  start_date: string;

  @IsDateString()
  @IsNotEmpty()
  end_date: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  amount: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  payment_due_date: number; // Day of the month

  @IsNumber()
  @IsOptional()
  @Min(0)
  security_deposit?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  monthly_maintenance?: number;

  @IsEnum(PaymentMethod)
  @IsNotEmpty()
  payment_method: PaymentMethod;

  @IsEnum(ContractStatus)
  @IsNotEmpty()
  status: ContractStatus;
}