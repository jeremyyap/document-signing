import {
  Entity,
  Column,
  ObjectIdColumn,
  BeforeInsert,
  Index,
  ObjectID,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  @Index({ unique: true })
  email: string;

  @Column()
  owned_documents: string[];

  @Column()
  assigned_documents: string[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

export type UserInfo = Pick<User, 'id' | 'username' | 'email'>;
