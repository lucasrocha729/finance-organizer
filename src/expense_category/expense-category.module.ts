import { Module } from '@nestjs/common';
import { ExpenseCategoryService } from './services/expense-category.service';
import { ExpenseCategoryController } from './controllers/expense-category.controller';
import { ExpenseCategory } from './entitites/expense-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseCategory])],
  controllers: [ExpenseCategoryController],
  providers: [ExpenseCategoryService],
})
export class ExpenseCategoryModule {}
