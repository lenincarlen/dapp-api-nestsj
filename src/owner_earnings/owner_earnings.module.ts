import { Module } from '@nestjs/common';
import { OwnerEarningsService } from './owner_earnings.service';
import { OwnerEarningsController } from './owner_earnings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerEarnings } from './entities/owner_earning.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OwnerEarnings])],
  controllers: [OwnerEarningsController],
  providers: [OwnerEarningsService],
  exports: [OwnerEarningsService],
})
export class OwnerEarningsModule {}
