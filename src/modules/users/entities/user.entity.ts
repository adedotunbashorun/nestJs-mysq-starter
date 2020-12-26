import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({

  })
  email: string;

  @Column()
  nogicUnique_id: string;

  @Column()
  nogicId: string;

  @Column()
  token: string;
  
  @Column()
  group: string;
       
  @Column()
  password: string;

  @Column('date')
  lastLogin: Date;

  @Column('boolean')
  isActive: boolean;
}