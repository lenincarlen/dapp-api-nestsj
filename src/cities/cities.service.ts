import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CitiesService {
  private cities: City[] = [];

  create(createCityDto: CreateCityDto): City {
    const newCity: City = {
      id: uuidv4(),
      ...createCityDto,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.cities.push(newCity);
    return newCity;
  }

  findAll(): City[] {
    return this.cities;
  }

  findOne(id: string): City {
    const city = this.cities.find((c) => c.id === id);
    if (!city) {
      throw new NotFoundException(`City with ID "${id}" not found`);
    }
    return city;
  }

  update(id: string, updateCityDto: UpdateCityDto): City {
    const city = this.findOne(id);
    const updatedCity = { ...city, ...updateCityDto, updated_at: new Date() };
    this.cities = this.cities.map((c) => (c.id === id ? updatedCity : c));
    return updatedCity;
  }

  remove(id: string): void {
    const cityIndex = this.cities.findIndex((c) => c.id === id);
    if (cityIndex === -1) {
      throw new NotFoundException(`City with ID "${id}" not found`);
    }
    this.cities.splice(cityIndex, 1);
  }
}
