import { User } from "src/users/user.entity";
import { MigrationInterface } from "typeorm";
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";

export class SeedUsers1636042964689 implements MigrationInterface {

    public async up(queryRunner: MongoQueryRunner): Promise<void> {
        const newUser = new User();
        newUser.email = "jeremy.yapjl@gmail.com";
        newUser.username = "Jeremy Yap"
        newUser.password = "$2b$10$dyK1WPVB2aazVsdJy1cuXO4kGovKhyx78fr7qWpzSZ0XqkaJcPsR." // "password"
        queryRunner.insertOne("user", newUser);
    }

    public async down(queryRunner: MongoQueryRunner): Promise<void> {
    }

}
