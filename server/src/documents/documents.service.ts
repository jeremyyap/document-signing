import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './document.entity';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private documentsRepository: Repository<Document>,
  ) {}

  async findByIDs(ids: Array<String>): Promise<Array<Document>> {
    return this.documentsRepository.findByIds(ids);
  }

  async findOne(id: string): Promise<Document> {
    return this.documentsRepository.findOne(id);
  }

  async save(document: Document): Promise<Document> {
    return this.documentsRepository.save(document);
  }
}
