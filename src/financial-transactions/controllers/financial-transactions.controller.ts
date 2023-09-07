import { Body, Controller, Post } from '@nestjs/common';
import { FinancialTransactionsService } from '../services/financial-transactions.service';
import { FinancialTransactionDto } from './dtos/create-financial-transactions.dto';

@Controller('financial-transactions')
export class FinancialTransactionsController {
  constructor(
    private readonly financialTransactionsService: FinancialTransactionsService,
  ) {}

  @Post()
  async create(@Body() createFinancialTransactions: FinancialTransactionDto) {
    return this.financialTransactionsService.create(
      createFinancialTransactions,
    );
  }
}
