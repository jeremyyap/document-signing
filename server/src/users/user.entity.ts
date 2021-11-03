import { Entity, Column, ObjectIdColumn, BeforeInsert, Index } from 'typeorm';
import * as bcrypt from "bcrypt";

@Entity()
export class User {
  @ObjectIdColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  @Index({ unique: true })
  email: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);  
  }
}