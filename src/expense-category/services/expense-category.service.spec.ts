import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseCategoryService } from './expense-category.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ExpenseCategory } from '../entitites/expense-category.entity';

describe('ExpenseCategoryService', () => {
  let service: ExpenseCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExpenseCategoryService,
        {
          provide: getRepositoryToken(ExpenseCategory),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ExpenseCategoryService>(ExpenseCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
