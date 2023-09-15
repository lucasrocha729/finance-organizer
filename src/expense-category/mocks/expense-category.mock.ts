import { ExpenseCategory } from '../models/expense-category.entity';
export const expenseCategoryMock = (): ExpenseCategory => {
  return {
    id: 'id-mock',
    userId: 'userId-mock',
    name: 'name-mock',
    createdAt: 'createdAt-mock',
    updatedAt: 'updatedAt-mock',
  };
};
