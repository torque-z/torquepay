import { Controller, Post, Body, Get, Param } from "@nestjs/common";

import { Cards } from "./cards.entity";
import { CardsServices } from "./cards.service";

@Controller("cards")
export class CardsController {
  constructor(private service: CardsServices) {}

  @Post()
  create(@Body() card: Cards) {
    return this.service.createBook(card);
  }

  @Get(':id')
  get(@Param() params) {
      return this.service.getCards(params.id);
  }
    
}
