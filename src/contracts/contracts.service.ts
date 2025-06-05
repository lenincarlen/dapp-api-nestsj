import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { Contract } from './entities/contract.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ContractsService {
  private contracts: Contract[] = [];

  create(createContractDto: CreateContractDto): Contract {
    const newContract: Contract = {
      id: uuidv4(),
      ...createContractDto,
      security_deposit: createContractDto.security_deposit ?? null,
      monthly_maintenance: createContractDto.monthly_maintenance ?? null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    this.contracts.push(newContract);
    return newContract;
  }

  findAll(): Contract[] {
    return this.contracts;
  }

  findOne(id: string): Contract {
    const contract = this.contracts.find((c) => c.id === id);
    if (!contract) {
      throw new NotFoundException(`Contract with ID "${id}" not found`);
    }
    return contract;
  }

  update(id: string, updateContractDto: UpdateContractDto): Contract {
    const contract = this.findOne(id);
    const updatedContract = { 
      ...contract, 
      ...updateContractDto, 
      security_deposit: updateContractDto.security_deposit !== undefined ? updateContractDto.security_deposit : contract.security_deposit,
      monthly_maintenance: updateContractDto.monthly_maintenance !== undefined ? updateContractDto.monthly_maintenance : contract.monthly_maintenance,
      updated_at: new Date().toISOString() 
    };
    this.contracts = this.contracts.map((c) => (c.id === id ? updatedContract : c));
    return updatedContract;
  }

  remove(id: string): void {
    const contractIndex = this.contracts.findIndex((c) => c.id === id);
    if (contractIndex === -1) {
      throw new NotFoundException(`Contract with ID "${id}" not found`);
    }
    this.contracts.splice(contractIndex, 1);
  }
}
