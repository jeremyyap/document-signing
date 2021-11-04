import { Injectable, Logger } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  async add(user: User): Promise<void> {
    return Promise.resolve().then(() => {
      Logger.log("User added:");
      Logger.log(JSON.stringify(user));
    });
  }
}