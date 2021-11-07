import { Entity, Column, ObjectIdColumn, ObjectID, Binary } from 'typeorm';

@Entity()
export class Document {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  file: Binary;

  @Column()
  owner: string;

  @Column()
  assignees: Array<{ userID: string, signed: boolean }>;
}