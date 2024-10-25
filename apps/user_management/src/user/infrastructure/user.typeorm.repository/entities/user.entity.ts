import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: string;
  @Column()
  dni: string;
  @Column()
  userName: string;
  @Column()
  userLastName: string;
  @Column()
  phone: string;
  @Column()
  email: string;
  @Column()
  lastDate: string;
  @Column()
  inscriptionDate: string;
  @Column()
  birthDate: string;
}
