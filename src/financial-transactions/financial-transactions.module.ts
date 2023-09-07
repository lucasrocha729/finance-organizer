import { Module } from '@nestjs/common';
import { FinancialTransactionsService } from './services/financial-transactions.service';
import { FinancialTransactionsController } from './controllers/financial-transactions.controller';
@Module({
  controllers: [FinancialTransactionsController],
  providers: [FinancialTransactionsService],
})
export class FinancialTransactionsModule {}
