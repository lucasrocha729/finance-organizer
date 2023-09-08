import { Injectable } from '@nestjs/common';
import { ExpenseCategory } from '../entitites/expense-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseCategoryDto } from '../dto/create-expense-category.dto';

@Injectable()
export class ExpenseCategoryService {
  constructor(
    @InjectRepository(ExpenseCategory)
    private readonly financialTransactionsRepository: Repository<ExpenseCategory>,
  ) {}

  async create(createExpenseCategoryDto: CreateExpenseCategoryDto) {
    try {
      const test = this.financialTransactionsRepository.create(
        createExpenseCategoryDto,
      );

      console.log(test);
      await this.financialTransactionsRepository.save(test);
    } catch (error) {
      console.error(error);
    }
  }
}
