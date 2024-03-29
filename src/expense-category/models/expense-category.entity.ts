import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExpenseCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column()
  name: string;

  @Column({ name: 'created_at', nullable: true, default: 'now()' })
  createdAt?: string;

  @Column({ name: 'updated_at', nullable: true, default: 'now()' })
  updatedAt?: string;

  @Column({ name: 'deleted_at', nullable: true })
  deletedAt?: string;
}
