import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BoardColumns {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;

  @Column()
  boardId!: string;
}
