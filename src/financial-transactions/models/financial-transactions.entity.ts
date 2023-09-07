import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FinancialTransaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  categoryId: string;

  @Column()
  type: string;

  @Column()
  value: number;

  @Column()
  date: string;

  @Column()
  formOfPayment: string;

  @Column()
  comment: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  deletedAt: string;
}
