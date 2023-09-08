import { Controller, Body, Post } from '@nestjs/common';
import { ExpenseCategoryService } from '../services/expense-category.service';
import { CreateExpenseCategoryDto } from '../dto/create-expense-category.dto';

@Controller('expense-category')
export class ExpenseCategoryController {
  constructor(
    private readonly expenseCategoryService: ExpenseCategoryService,
  ) {}

  @Post()
  async create(@Body() createExpenseCategoryDto: CreateExpenseCategoryDto) {
    return this.expenseCategoryService.create(createExpenseCategoryDto);
  }
}
