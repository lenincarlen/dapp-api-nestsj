import { IsString, IsNotEmpty, IsUUID, IsNumber, IsOptional, IsDateString, IsEnum } from 'class-validator';

export enum RentStatus {
  PENDING = 'pending',
  PAID = 'paid',
  LATE = 'late',
  CANCELLED = 'cancelled',
}

export class CreateRentDto {
  @IsUUID()
  @IsNotEmpty()
  contract_id: string;

  @IsUUID()
  @IsNotEmpty()
  tenant_id: string;

  @IsUUID()
  @IsNotEmpty()
  owner_id: string;

  @IsUUID()
  @IsNotEmpty()
  property_id: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNumber()
  @IsOptional()
  monthly_maintenance?: number;

  @IsDateString()
  @IsNotEmpty()
  due_date: string;

  @IsDateString()
  @IsOptional()
  paid_at?: string;

  @IsEnum(RentStatus)
  @IsNotEmpty()
  status: RentStatus;

  @IsString()
  @IsOptional()
  payment_method?: string;

  @IsString()
  @IsOptional()
  notes?: string;

  @IsNumber()
  @IsOptional()
  previous_balance?: number;

  @IsNumber()
  @IsNotEmpty()
  total_due: number;
}