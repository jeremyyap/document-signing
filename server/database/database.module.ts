import { Module } from "@nestjs/common";
import { UsersModule } from "src/users/users.module";
import { Seed } from "./seed";

@Module({
    imports: [UsersModule],
    providers: [Seed],
    exports: [Seed]
})
export class DatabaseModule {}