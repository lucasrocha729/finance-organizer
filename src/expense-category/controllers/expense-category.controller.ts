import { Controller, Body, Post, Delete, Param } from '@nestjs/common';
import { ExpenseCategoryService } from '../services/expense-category.service';
import { CreateExpenseCategoryDto } from '../dto/create-expense-category.dto';
import { ExpenseCategory } from '../models/expense-category.entity';

@Controller('expense-category')
export class ExpenseCategoryController {
  constructor(private readonly expenseCategoryService: ExpenseCategoryService) {}

  @Post('create')
  async register(@Body() createExpenseCategoryDto: CreateExpenseCategoryDto): Promise<ExpenseCategory> {
    try {
      return this.expenseCategoryService.registerExpenseCategory(createExpenseCategoryDto);
    } catch (error) {
      console.error(error);
    }
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<string> {
    try {
      return this.expenseCategoryService.deleteExpenseCategory(id);
    } catch (error) {
      console.error(error);
    }
  }
}
