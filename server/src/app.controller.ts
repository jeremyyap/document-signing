import {
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { DocumentsService } from './documents/documents.service';
import { UsersService } from './users/users.service';
import { Document } from './documents/document.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly documentsService: DocumentsService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('documents')
  async getDocuments(@Request() req) {
    const user = await this.usersService.findOne(req.user.id);
    return this.documentsService.findByIDs(user.assigned_documents.concat(user.owned_documents));
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('documents/:id')
  async getDocument(@Param('id') id: string) {
    return this.documentsService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('documents/new')
  async createDocument() {
    const document = new Document();
    return this.documentsService.save(document);
  }
}
