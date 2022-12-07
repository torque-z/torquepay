import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './User.entity';


@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private UserssRepository: Repository<Users>) { }

    createBook(book: Users): Promise<Users> {
        return this.UserssRepository.save(book);
    }

    async getUsers(Users: Users): Promise<Users[]> {
        return await this.UserssRepository.find();
    }

    async getUser(_id: number): Promise<Users[]> {

        console.log(_id);
        return await this.UserssRepository.find();
    }

    async updateUser(Users: Users) {
        this.UserssRepository.save(Users)
    }

    async deleteUser(Users: Users) {
        this.UserssRepository.delete(Users);
    }

}
