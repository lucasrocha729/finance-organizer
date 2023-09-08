import { Module } from '@nestjs/common';
import { FinancialTransactionsService } from './services/financial-transactions.service';
import { FinancialTransactionsController } from './controllers/financial-transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialTransaction } from './entitites/financial-transactions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinancialTransaction])],
  controllers: [FinancialTransactionsController],
  providers: [FinancialTransactionsService],
})
export class FinancialTransactionsModule {}
