import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async add(user: User): Promise<void> {
    this.usersRepository.insert(user).then(() => {
      Logger.log("User added:");
      Logger.log(JSON.stringify(user));
    });
  }
}