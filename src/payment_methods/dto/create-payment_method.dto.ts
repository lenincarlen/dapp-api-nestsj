import { IsString, IsNotEmpty, IsUUID, IsBoolean, IsOptional } from 'class-validator';

export class CreatePaymentMethodDto {
  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  stripe_id: string;

  @IsBoolean()
  @IsOptional()
  is_default?: boolean;

  @IsString()
  @IsNotEmpty()
  type: string; // e.g., 'credit_card', 'bank_account'

  @IsString()
  @IsNotEmpty()
  payment_method_type: string; // e.g., 'card', 'ach_debit'

  @IsString()
  @IsOptional()
  card_type?: string; // e.g., 'visa', 'mastercard'

  @IsString()
  @IsOptional()
  last_four?: string;

  @IsString()
  @IsOptional()
  expiration_date?: string; // MM/YYYY
}