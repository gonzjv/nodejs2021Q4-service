import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Boards {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;
}
