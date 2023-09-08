import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FinancialTransaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'category_id' })
  categoryId: string;

  @Column()
  type: string;

  @Column()
  value: number;

  @Column()
  date: Date;

  @Column({ name: 'form_of_payment' })
  formOfPayment: string;

  @Column()
  comment: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;

  @Column({ name: 'deleted_at' })
  deletedAt: string;
}
