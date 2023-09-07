import { Module } from '@nestjs/common';
import { FinancialTransactionsService } from './services/financial-transactions.service';
import { FinancialTransactionsController } from './controllers/financial-transactions.controller';
import { FinancialTransaction } from './models/financial-transactions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FinancialTransaction])],
  controllers: [FinancialTransactionsController],
  providers: [FinancialTransactionsService],
})
export class FinancialTransactionsModule {}
