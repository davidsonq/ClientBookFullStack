import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import User from "./users.entity";

@Entity("contacts")
class Contact {
  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 50,
    unique: true,
  })
  email: string;

  @Column({
    length: 50,
    unique: true,
    nullable: true,
  })
  secondEmail: string;

  @Column({
    length: 20,
  })
  phone: string;

  @Column({
    length: 20,
    nullable: true,
  })
  secondPhone: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}

export default Contact;
