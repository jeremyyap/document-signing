import { Injectable } from "@nestjs/common";
import { User } from "src/users/user.entity";
import { Command } from "nestjs-command";
import { UsersService } from "src/users/users.service";

@Injectable()
export class Seed {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Command({
    command: 'seed', describe: 'seed database'
  })
  async seed() {
    const newUser = new User();
    newUser.email = "jeremy.yapjl@gmail.com";
    newUser.username = "jeremyyap"
    newUser.password = "password"
    this.usersService.add(newUser);
  }
}