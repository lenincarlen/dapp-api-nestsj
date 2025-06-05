import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { PaymentMethod } from './entities/payment_method.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PaymentMethodsService {
  private paymentMethods: PaymentMethod[] = [];

  create(createPaymentMethodDto: CreatePaymentMethodDto): PaymentMethod {
    const newPaymentMethod: PaymentMethod = {
      id: uuidv4(),
      ...createPaymentMethodDto,
      is_default: createPaymentMethodDto.is_default || false,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.paymentMethods.push(newPaymentMethod);
    return newPaymentMethod;
  }

  findAll(): PaymentMethod[] {
    return this.paymentMethods;
  }

  findOne(id: string): PaymentMethod {
    const paymentMethod = this.paymentMethods.find((pm) => pm.id === id);
    if (!paymentMethod) {
      throw new NotFoundException(`PaymentMethod with ID "${id}" not found`);
    }
    return paymentMethod;
  }

  update(id: string, updatePaymentMethodDto: UpdatePaymentMethodDto): PaymentMethod {
    const paymentMethodIndex = this.paymentMethods.findIndex((pm) => pm.id === id);
    if (paymentMethodIndex === -1) {
      throw new NotFoundException(`PaymentMethod with ID "${id}" not found`);
    }
    const updatedPaymentMethod = {
      ...this.paymentMethods[paymentMethodIndex],
      ...updatePaymentMethodDto,
      updated_at: new Date(),
    };
    this.paymentMethods[paymentMethodIndex] = updatedPaymentMethod;
    return updatedPaymentMethod;
  }

  remove(id: string): void {
    const paymentMethodIndex = this.paymentMethods.findIndex((pm) => pm.id === id);
    if (paymentMethodIndex === -1) {
      throw new NotFoundException(`PaymentMethod with ID "${id}" not found`);
    }
    this.paymentMethods.splice(paymentMethodIndex, 1);
  }
}
