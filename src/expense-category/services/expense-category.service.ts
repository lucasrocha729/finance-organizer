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

  async create(createExpenseCategoryDto: CreateExpenseCategoryDto) {
    try {
      const test = this.financialTransactionsRepository.create(createExpenseCategoryDto);

      console.log(test);
      await this.financialTransactionsRepository.save(test);
    } catch (error) {
      console.error(error);
    }
  }
}
