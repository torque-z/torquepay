import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { CardsServices } from './cards.service';
import { CardsController } from './cards.controller';
import { Cards } from './cards.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Cards])],
  providers: [CardsServices],
  controllers: [CardsController],
})

export class CardsModule { }