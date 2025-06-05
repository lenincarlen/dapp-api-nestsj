import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OwnerService {
  private owners: Owner[] = [];

  create(createOwnerDto: CreateOwnerDto): Owner {
    const newOwner: Owner = {
      id: uuidv4(),
      ...createOwnerDto,
      // Asegurarse de que los campos opcionales tengan un valor por defecto si es necesario
      properties: createOwnerDto.properties || [],
      contracts: createOwnerDto.contracts || [],
      earnings: createOwnerDto.earnings || 0,
      status: createOwnerDto.status || undefined, // o un estado por defecto
    };
    this.owners.push(newOwner);
    return newOwner;
  }

  findAll(): Owner[] {
    return this.owners;
  }

  findOne(id: string): Owner {
    const owner = this.owners.find((o) => o.id === id);
    if (!owner) {
      throw new NotFoundException(`Owner with ID "${id}" not found`);
    }
    return owner;
  }

  update(id: string, updateOwnerDto: UpdateOwnerDto): Owner {
    const ownerIndex = this.owners.findIndex((o) => o.id === id);
    if (ownerIndex === -1) {
      throw new NotFoundException(`Owner with ID "${id}" not found`);
    }
    // Se preservan los valores existentes si no vienen en el DTO de actualización
    const updatedOwner = { 
      ...this.owners[ownerIndex], 
      ...updateOwnerDto 
    };
    this.owners[ownerIndex] = updatedOwner;
    return updatedOwner;
  }

  remove(id: string): { message: string } {
    const ownerIndex = this.owners.findIndex((o) => o.id === id);
    if (ownerIndex === -1) {
      throw new NotFoundException(`Owner with ID "${id}" not found`);
    }
    this.owners.splice(ownerIndex, 1);
    return { message: `Owner with ID "${id}" successfully removed` };
  }
}
