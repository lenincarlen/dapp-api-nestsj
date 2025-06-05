import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRentDto, RentStatus } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { Rent } from './entities/rent.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RentsService {
  private rents: Rent[] = [];

  create(createRentDto: CreateRentDto): Rent {
    const newRent: Rent = {
      id: uuidv4(),
      ...createRentDto,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    this.rents.push(newRent);
    return newRent;
  }

  findAll(): Rent[] {
    return this.rents;
  }

  findOne(id: string): Rent {
    const rent = this.rents.find((r) => r.id === id);
    if (!rent) {
      throw new NotFoundException(`Rent with ID "${id}" not found`);
    }
    return rent;
  }

  update(id: string, updateRentDto: UpdateRentDto): Rent {
    const rent = this.findOne(id);
    const updatedRent = { ...rent, ...updateRentDto, updated_at: new Date().toISOString() };
    this.rents = this.rents.map((r) => (r.id === id ? updatedRent : r));
    return updatedRent;
  }

  remove(id: string): void {
    const rentIndex = this.rents.findIndex((r) => r.id === id);
    if (rentIndex === -1) {
      throw new NotFoundException(`Rent with ID "${id}" not found`);
    }
    this.rents.splice(rentIndex, 1);
  }
}
