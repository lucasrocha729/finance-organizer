import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionTypeEnum } from '../enums/transaction-type';
import { FormOfPaymentEnum } from '../enums/form-of-payment';

@Entity()
export class FinancialTransaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'category_id' })
  categoryId: string;

  @Column({ type: 'enum', enum: TransactionTypeEnum })
  type: TransactionTypeEnum;

  @Column()
  value: number;

  @Column()
  date: Date;

  @Column({ name: 'form_of_payment', type: 'enum', enum: FormOfPaymentEnum })
  formOfPayment: FormOfPaymentEnum;

  @Column()
  comment: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
