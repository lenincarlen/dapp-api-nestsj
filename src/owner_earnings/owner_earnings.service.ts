import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOwnerEarningDto } from './dto/create-owner_earning.dto';
import { UpdateOwnerEarningDto } from './dto/update-owner_earning.dto';
import { OwnerEarning } from './entities/owner_earning.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OwnerEarningsService {
  private ownerEarnings: OwnerEarning[] = [];

  create(createOwnerEarningDto: CreateOwnerEarningDto): OwnerEarning {
    const newOwnerEarning: OwnerEarning = {
      id: uuidv4(),
      ...createOwnerEarningDto,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.ownerEarnings.push(newOwnerEarning);
    return newOwnerEarning;
  }

  findAll(): OwnerEarning[] {
    return this.ownerEarnings;
  }

  findOne(id: string): OwnerEarning {
    const ownerEarning = this.ownerEarnings.find((oe) => oe.id === id);
    if (!ownerEarning) {
      throw new NotFoundException(`OwnerEarning with ID "${id}" not found`);
    }
    return ownerEarning;
  }

  update(id: string, updateOwnerEarningDto: UpdateOwnerEarningDto): OwnerEarning {
    const ownerEarningIndex = this.ownerEarnings.findIndex((oe) => oe.id === id);
    if (ownerEarningIndex === -1) {
      throw new NotFoundException(`OwnerEarning with ID "${id}" not found`);
    }
    const updatedOwnerEarning = {
      ...this.ownerEarnings[ownerEarningIndex],
      ...updateOwnerEarningDto,
      updated_at: new Date(),
    };
    this.ownerEarnings[ownerEarningIndex] = updatedOwnerEarning;
    return updatedOwnerEarning;
  }

  remove(id: string): void {
    const ownerEarningIndex = this.ownerEarnings.findIndex((oe) => oe.id === id);
    if (ownerEarningIndex === -1) {
      throw new NotFoundException(`OwnerEarning with ID "${id}" not found`);
    }
    this.ownerEarnings.splice(ownerEarningIndex, 1);
  }
}
