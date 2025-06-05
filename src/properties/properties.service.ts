import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { v4 as uuidv4 } from 'uuid'; // Para generar IDs únicos

@Injectable()
export class PropertiesService {
  private properties: Property[] = [];

  create(createPropertyDto: CreatePropertyDto): Property {
    const newProperty: Property = {
      id: uuidv4(),
      ...createPropertyDto,
    };
    this.properties.push(newProperty);
    return newProperty;
  }

  findAll(): Property[] {
    return this.properties;
  }

  findOne(id: string): Property {
    const property = this.properties.find((p) => p.id === id);
    if (!property) {
      throw new NotFoundException(`Property with ID "${id}" not found`);
    }
    return property;
  }

  update(id: string, updatePropertyDto: UpdatePropertyDto): Property {
    const propertyIndex = this.properties.findIndex((p) => p.id === id);
    if (propertyIndex === -1) {
      throw new NotFoundException(`Property with ID "${id}" not found`);
    }
    const updatedProperty = { ...this.properties[propertyIndex], ...updatePropertyDto };
    this.properties[propertyIndex] = updatedProperty;
    return updatedProperty;
  }

  remove(id: string): { message: string } {
    const propertyIndex = this.properties.findIndex((p) => p.id === id);
    if (propertyIndex === -1) {
      throw new NotFoundException(`Property with ID "${id}" not found`);
    }
    this.properties.splice(propertyIndex, 1);
    return { message: `Property with ID "${id}" successfully removed` };
  }
}
