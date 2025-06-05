import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CountriesService {
  private countries: Country[] = [];

  create(createCountryDto: CreateCountryDto): Country {
    const newCountry: Country = {
      id: uuidv4(),
      ...createCountryDto,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    this.countries.push(newCountry);
    return newCountry;
  }

  findAll(): Country[] {
    return this.countries;
  }

  findOne(id: string): Country {
    const country = this.countries.find((c) => c.id === id);
    if (!country) {
      throw new NotFoundException(`Country with ID "${id}" not found`);
    }
    return country;
  }

  update(id: string, updateCountryDto: UpdateCountryDto): Country {
    const country = this.findOne(id);
    const updatedCountry = { ...country, ...updateCountryDto, updated_at: new Date().toISOString() };
    this.countries = this.countries.map((c) => (c.id === id ? updatedCountry : c));
    return updatedCountry;
  }

  remove(id: string): void {
    const countryIndex = this.countries.findIndex((c) => c.id === id);
    if (countryIndex === -1) {
      throw new NotFoundException(`Country with ID "${id}" not found`);
    }
    this.countries.splice(countryIndex, 1);
  }
}
