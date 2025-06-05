import { Module } from '@nestjs/common';
import { PropertyTypesService } from './property_types.service';
import { PropertyTypesController } from './property_types.controller';
import { PropertyType } from './entities/property_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([PropertyType])],
  controllers: [PropertyTypesController],
  providers: [PropertyTypesService],
  exports: [PropertyTypesService],
})
export class PropertyTypesModule {}
