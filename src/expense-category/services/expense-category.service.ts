import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ExpenseCategory } from '../models/expense-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateExpenseCategoryDto } from '../dto/create-expense-category.dto';
import { ExpenseCategoryRepository } from '../repositories/expense-category.repository';

@Injectable()
export class ExpenseCategoryService {
  constructor(
    @InjectRepository(ExpenseCategory)
    private readonly financialTransactionsRepository: ExpenseCategoryRepository,
  ) {}

  async registerExpenseCategory(createExpenseCategoryDto: CreateExpenseCategoryDto): Promise<ExpenseCategory> {
    const name = createExpenseCategoryDto.name.trim().toLocaleLowerCase();
    const userId = createExpenseCategoryDto.userId;

    const equalCategoryToUser = await this.financialTransactionsRepository.findBy({ name, userId });

    if (equalCategoryToUser.length) {
      throw new HttpException('Category already existing for the user', HttpStatus.CONFLICT);
    }

    try {
      const expenseCategory = this.financialTransactionsRepository.create(createExpenseCategoryDto);

      return this.financialTransactionsRepository.save(expenseCategory);
    } catch (error) {
      console.error(error);
    }
  }
}
