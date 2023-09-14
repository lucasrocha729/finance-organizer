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
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should be return data if create with success', async () => {
    const mockCreateExpenseCategoryDto = createExpenseCategoryDtoMock();

    jest.spyOn(repository, 'create').mockImplementation(() => mockExpenseCategory);
    jest.spyOn(repository, 'save').mockImplementation(() => Promise.resolve(mockExpenseCategory));

    const response = await service.registerExpenseCategory(mockCreateExpenseCategoryDto);
    expect(response).toBe(mockExpenseCategory);
  });
});
