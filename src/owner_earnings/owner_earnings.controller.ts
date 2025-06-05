import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { OwnerEarningsService } from './owner_earnings.service';
import { CreateOwnerEarningDto } from './dto/create-owner_earning.dto';
import { UpdateOwnerEarningDto } from './dto/update-owner_earning.dto';

@Controller('owner-earnings')
export class OwnerEarningsController {
  constructor(private readonly ownerEarningsService: OwnerEarningsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createOwnerEarningDto: CreateOwnerEarningDto) {
    return this.ownerEarningsService.create(createOwnerEarningDto);
  }

  @Get()
  findAll() {
    return this.ownerEarningsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ownerEarningsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateOwnerEarningDto: UpdateOwnerEarningDto) {
    return this.ownerEarningsService.update(id, updateOwnerEarningDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.ownerEarningsService.remove(id);
  }
}
