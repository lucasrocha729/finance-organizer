import { UpdateExpenseCategoryDto } from '../dto/update-expense-category.dto';

export const updateExpenseCategoryDtoMock = (): UpdateExpenseCategoryDto => {
  return {
    id: 'id-mock',
    name: 'name-mock',
    userId: 'userId-mock',
  };
};
