import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PaymentsService {
  private payments: Payment[] = [];

  create(createPaymentDto: CreatePaymentDto): Payment {
    const newPayment: Payment = {
      id: uuidv4(),
      ...createPaymentDto,
      stripe_session_id: createPaymentDto.stripe_session_id ?? null,
      stripe_payment_intent: createPaymentDto.stripe_payment_intent ?? null,
      payment_history: createPaymentDto.payment_history ?? null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    this.payments.push(newPayment as Payment);
    return newPayment as Payment;
  }

  findAll(): Payment[] {
    return this.payments;
  }

  findOne(id: string): Payment {
    const payment = this.payments.find((p) => p.id === id);
    if (!payment) {
      throw new NotFoundException(`Payment with ID "${id}" not found`);
    }
    return payment;
  }

  update(id: string, updatePaymentDto: UpdatePaymentDto): Payment {
    const payment = this.findOne(id);
    const updatedPayment = { ...payment, ...updatePaymentDto, updated_at: new Date().toISOString() };
    this.payments = this.payments.map((p) => (p.id === id ? updatedPayment : p));
    return updatedPayment;
  }

  remove(id: string): void {
    const paymentIndex = this.payments.findIndex((p) => p.id === id);
    if (paymentIndex === -1) {
      throw new NotFoundException(`Payment with ID "${id}" not found`);
    }
    this.payments.splice(paymentIndex, 1);
  }
}
