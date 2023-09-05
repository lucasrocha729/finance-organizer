import { Module } from '@nestjs/common';
import { FinancialTransactionsModule } from './financial-transactions/financial-transactions.module';

@Module({
  imports: [FinancialTransactionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
