import { User } from 'src/users/user.entity';
import { MigrationInterface } from 'typeorm';
import { MongoQueryRunner } from 'typeorm/driver/mongodb/MongoQueryRunner';

export class SeedUsers1636042964689 implements MigrationInterface {
  public async up(queryRunner: MongoQueryRunner): Promise<void> {
    const newUser = new User();
    newUser.email = 'jeremy.yapjl@gmail.com';
    newUser.username = 'Jeremy Yap';
    newUser.password =
      '$2b$10$dyK1WPVB2aazVsdJy1cuXO4kGovKhyx78fr7qWpzSZ0XqkaJcPsR.'; // "password"
    queryRunner.insertOne('user', newUser);

    const newUser2 = new User();
    newUser2.email = 'user2@example.com';
    newUser2.username = 'User 2';
    newUser2.password =
      '$2b$10$dyK1WPVB2aazVsdJy1cuXO4kGovKhyx78fr7qWpzSZ0XqkaJcPsR.'; // "password"
    queryRunner.insertOne('user', newUser2);

    const newUser3 = new User();
    newUser3.email = 'user3@example.com';
    newUser3.username = 'User 3';
    newUser3.password =
      '$2b$10$dyK1WPVB2aazVsdJy1cuXO4kGovKhyx78fr7qWpzSZ0XqkaJcPsR.'; // "password"
    queryRunner.insertOne('user', newUser3);
  }

  public async down(queryRunner: MongoQueryRunner): Promise<void> {}
}
