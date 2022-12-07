import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cards } from './cards.entity';

@Injectable()
export class CardsServices {

    constructor(@InjectRepository(Cards) private CardsRepository: Repository<Cards>) { }

    createBook(card: Cards): Promise<Cards> {
        return this.CardsRepository.save(card);
    }

    async getCards(_id: number): Promise<Cards[]> {

        console.log(_id);
        return await this.CardsRepository.find();
    }


}
