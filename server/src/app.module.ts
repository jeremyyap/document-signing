import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { CommandModule } from 'nestjs-command';
import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CommandModule,
    DatabaseModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
