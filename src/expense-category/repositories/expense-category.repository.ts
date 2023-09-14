import { Repository } from 'typeorm';
import { ExpenseCategory } from '../models/expense-category.entity';

export class ExpenseCategoryRepository extends Repository<ExpenseCategory> {}
