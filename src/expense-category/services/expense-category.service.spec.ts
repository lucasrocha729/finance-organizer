import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseCategoryService } from './expense-category.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ExpenseCategory } from '../models/expense-category.entity';
import { Repository } from 'typeorm';
import { expenseCategoryMock } from '../mocks/expense-category.mock';
import { createExpenseCategoryDtoMock } from '../mocks/create-expense-category-dto.mock';

describe('ExpenseCategoryService', () => {
  let service: ExpenseCategoryService;
  let repository: Repository<ExpenseCategory>;
  let mockExpenseCategory = expenseCategoryMock();
  let mockCreateExpenseCategoryDto = createExpenseCategoryDtoMock();

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
});
