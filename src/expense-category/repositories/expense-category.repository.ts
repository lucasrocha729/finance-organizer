import { Repository } from 'typeorm';
import { ExpenseCategory } from '../entitites/expense-category.entity';

export class ExpenseCategoryRepository extends Repository<ExpenseCategory> {}
