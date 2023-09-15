import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column({ name: 'created_at', nullable: true, default: 'now()' })
  createdAt?: string;

  @Column({ name: 'updated_at', nullable: true, default: 'now()' })
  updatedAt?: string;

  @Column({ name: 'deleted_at', nullable: true })
  deletedAt?: string;
}
