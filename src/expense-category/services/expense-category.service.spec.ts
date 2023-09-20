import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseCategoryService } from './expense-category.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ExpenseCategory } from '../models/expense-category.entity';
import { Repository } from 'typeorm';
import { expenseCategoryMock } from '../mocks/expense-category.mock';
import { createExpenseCategoryDtoMock } from '../mocks/create-expense-category-dto.mock';
import { updateExpenseCategoryDtoMock } from '../mocks/update-expense-category-dto.mock';

describe('ExpenseCategoryService', () => {
  let service: ExpenseCategoryService;
  let repository: Repository<ExpenseCategory>;

  let mockExpenseCategory = expenseCategoryMock();
  let mockCreateExpenseCategoryDto = createExpenseCategoryDtoMock();
  let mockUpdateExpenseCategoryDtoMock = updateExpenseCategoryDtoMock();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExpenseCategoryService,
        {
          provide: getRepositoryToken(ExpenseCategory),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ExpenseCategoryService>(ExpenseCategoryService);
    repository = module.get<Repository<ExpenseCategory>>(getRepositoryToken(ExpenseCategory));

    mockExpenseCategory = expenseCategoryMock();
    mockCreateExpenseCategoryDto = createExpenseCategoryDtoMock();
    mockUpdateExpenseCategoryDtoMock = updateExpenseCategoryDtoMock();
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should be return data if create with success', async () => {
    jest.spyOn(repository, 'create').mockImplementation(() => mockExpenseCategory);
    jest.spyOn(repository, 'save').mockImplementation(() => Promise.resolve(mockExpenseCategory));
    jest.spyOn(repository, 'findBy').mockImplementation(() => Promise.resolve([]));

    const response = await service.registerExpenseCategory(mockCreateExpenseCategoryDto);
    expect(response).toBe(mockExpenseCategory);
  });

  it('should be throws if expense category exists ', async () => {
    jest.spyOn(repository, 'findBy').mockImplementation(() => Promise.resolve([mockExpenseCategory]));

    await service.registerExpenseCategory(mockCreateExpenseCategoryDto).catch((e) => {
      expect(e.status).toBeGreaterThanOrEqual(409);
      expect(e.status).toBeLessThan(500);
      expect(e.response).toEqual('Category already existing for the user');
    });
  });

  it('should be throws if expense category exists ', async () => {
    const findBy = jest.spyOn(repository, 'findBy').mockImplementation(() => Promise.resolve([mockExpenseCategory]));

    await service.registerExpenseCategory({ ...mockCreateExpenseCategoryDto, name: '   name-MOCK   ' }).catch(() => {
      expect(findBy).toBeCalledTimes(1);
      expect(findBy).toBeCalledWith({ name: 'name-mock', userId: 'userId-mock' });
    });
  });

  it('should be throws if expense category exists ', async () => {
    const findBy = jest.spyOn(repository, 'findBy').mockImplementation(() => Promise.resolve([]));
    jest.spyOn(repository, 'create').mockImplementation(() => mockExpenseCategory);
    jest.spyOn(repository, 'save').mockImplementation(() => Promise.resolve(mockExpenseCategory));

    await service.registerExpenseCategory({ ...mockCreateExpenseCategoryDto, name: '   name MOCK   ' });

    expect(findBy).toBeCalledTimes(1);
    expect(findBy).toBeCalledWith({ name: 'name mock', userId: 'userId-mock' });
  });

  it('should be returns that the record was deleted successfully ', async () => {
    const spyFindByOne = jest.spyOn(repository, 'findOneBy').mockImplementation(() => Promise.resolve(mockExpenseCategory));
    const spyDelete = jest.spyOn(repository, 'delete').mockResolvedValue({ raw: '', affected: 1 });

    const response = await service.deleteExpenseCategory('id-mock');

    expect(spyFindByOne).toBeCalledTimes(1);
    expect(spyFindByOne).toBeCalledWith({ id: 'id-mock' });

    expect(spyDelete).toBeCalledTimes(1);
    expect(spyDelete).toBeCalledWith('id-mock');

    expect(response).toBe('Expense category deleted with success');
  });

  it('should be ensure that it is not possible to delete a non-existent record ', async () => {
    jest.spyOn(repository, 'findOneBy').mockImplementation(() => Promise.resolve(null));

    await service.deleteExpenseCategory('id-mock').catch((e) => {
      expect(e.status).toBeGreaterThanOrEqual(404);
      expect(e.status).toBeLessThan(500);
      expect(e.response).toEqual('Expense category not exist');
    });
  });

  it('should be returns new record when editing successfully', async () => {
    const spyFindByOne = jest.spyOn(repository, 'findOneBy').mockImplementation(() => Promise.resolve(mockExpenseCategory));
    const updateSpy = jest.spyOn(repository, 'update').mockImplementation(() =>
      Promise.resolve({
        generatedMaps: [],
        raw: [],
        affected: 1,
      }),
    );

    await service.editExpenseCategory({ ...mockUpdateExpenseCategoryDtoMock, name: 'New name' });

    expect(spyFindByOne).toBeCalledTimes(1);
    expect(spyFindByOne).toBeCalledWith({ id: 'id-mock' });

    expect(updateSpy).toBeCalledTimes(1);
    expect(updateSpy).toBeCalledWith(mockExpenseCategory.id, { ...mockExpenseCategory, name: 'New name', updatedAt: new Date() });
  });
});
