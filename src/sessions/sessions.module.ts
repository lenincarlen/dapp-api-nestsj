import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { Sessions } from './entities/session.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
   imports: [TypeOrmModule.forFeature([Sessions])],
  controllers: [SessionsController],
  providers: [SessionsService],
  exports: [SessionsService],

})
export class SessionsModule {}
