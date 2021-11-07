import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Document {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  file: Buffer;

  @Column()
  owner: string;

  @Column()
  assignees: Array<{ userID: string; signed: boolean }>;
}
