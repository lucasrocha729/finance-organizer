import { CreateExpenseCategoryDto } from '../dto/create-expense-category.dto';

export const createExpenseCategoryDtoMock = (): CreateExpenseCategoryDto => {
  return {
    name: 'name-id',
    userId: 'userId-id',
  };
};
