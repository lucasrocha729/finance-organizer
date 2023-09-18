import { Controller, Body, Post, Delete, Param } from '@nestjs/common';
import { ExpenseCategoryService } from '../services/expense-category.service';
import { CreateExpenseCategoryDto } from '../dto/create-expense-category.dto';
import { ExpenseCategory } from '../models/expense-category.entity';
import { DeleteExpenseCategoryDto } from '../dto/delete-expense-category.dto';

@Controller('expense-category')
export class ExpenseCategoryController {
  constructor(private readonly expenseCategoryService: ExpenseCategoryService) {}

  @Post('create')
  async register(@Body() createExpenseCategoryDto: CreateExpenseCategoryDto): Promise<ExpenseCategory> {
    return this.expenseCategoryService.registerExpenseCategory(createExpenseCategoryDto);
  }

  @Delete('delete/:id')
  async delete(@Param('id') deleteExpenseCategoryDto: DeleteExpenseCategoryDto): Promise<string> {
    return this.expenseCategoryService.deleteExpenseCategory(deleteExpenseCategoryDto);
  }
}
