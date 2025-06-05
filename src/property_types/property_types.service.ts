import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePropertyTypeDto } from './dto/create-property_type.dto';
import { UpdatePropertyTypeDto } from './dto/update-property_type.dto';
import { PropertyType } from './entities/property_type.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PropertyTypesService {
  private propertyTypes: PropertyType[] = [];

  create(createPropertyTypeDto: CreatePropertyTypeDto): PropertyType {
    const newPropertyType: PropertyType = {
      id: uuidv4(),
      ...createPropertyTypeDto,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    this.propertyTypes.push(newPropertyType);
    return newPropertyType;
  }

  findAll(): PropertyType[] {
    return this.propertyTypes;
  }

  findOne(id: string): PropertyType {
    const propertyType = this.propertyTypes.find((pt) => pt.id === id);
    if (!propertyType) {
      throw new NotFoundException(`PropertyType with ID "${id}" not found`);
    }
    return propertyType;
  }

  update(id: string, updatePropertyTypeDto: UpdatePropertyTypeDto): PropertyType {
    const propertyType = this.findOne(id);
    const updatedPropertyType = { ...propertyType, ...updatePropertyTypeDto, updated_at: new Date().toISOString() };
    this.propertyTypes = this.propertyTypes.map((pt) => (pt.id === id ? updatedPropertyType : pt));
    return updatedPropertyType;
  }

  remove(id: string): void {
    const propertyTypeIndex = this.propertyTypes.findIndex((pt) => pt.id === id);
    if (propertyTypeIndex === -1) {
      throw new NotFoundException(`PropertyType with ID "${id}" not found`);
    }
    this.propertyTypes.splice(propertyTypeIndex, 1);
  }
}
