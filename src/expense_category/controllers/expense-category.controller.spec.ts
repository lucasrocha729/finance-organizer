import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseCategoryController } from './expense-category.controller';
import { ExpenseCategoryService } from '../services/expense-category.service';
import { ExpenseCategory } from '../entitites/expense-category.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ExpenseCategoryController', () => {
  let controller: ExpenseCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseCategoryController],
      providers: [
        ExpenseCategoryService,
        {
          provide: getRepositoryToken(ExpenseCategory),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ExpenseCategoryController>(
      ExpenseCategoryController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
