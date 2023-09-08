import { Repository } from 'typeorm';
import { FinancialTransaction } from '../entitites/financial-transactions.entity';

export class FinancialTransactionRepository extends Repository<FinancialTransaction> {}
