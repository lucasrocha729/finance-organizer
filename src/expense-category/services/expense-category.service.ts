import { Injectable } from '@nestjs/common';
import { ExpenseCategory } from '../entitites/expense-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateExpenseCategoryDto } from '../dto/create-expense-category.dto';
import { ExpenseCategoryRepository } from '../repositories/expense-category.repository';

@Injectable()
export class ExpenseCategoryService {
  constructor(
    @InjectRepository(ExpenseCategory)
    private readonly financialTransactionsRepository: ExpenseCategoryRepository,
  ) {}

  async registerExpenseCategory(createExpenseCategoryDto: CreateExpenseCategoryDto) {
    try {
      const expenseCategory = this.financialTransactionsRepository.create(createExpenseCategoryDto);

      await this.financialTransactionsRepository.save(expenseCategory);
    } catch (error) {
      console.error(error);
    }
  }
}
