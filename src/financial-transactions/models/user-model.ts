import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  login: string;

  @Column({ nullable: false })
  password: string;

  @Column({ name: 'created_at', type: 'timestamp', nullable: false })
  createdAt: string;

  @Column({ name: 'updated_at', type: 'timestamp', nullable: false })
  updatedAt: string;

  @Column({ name: 'deleted_at', type: 'timestamp', nullable: false })
  deletedAt: string;
}
