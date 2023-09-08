import { Injectable } from '@nestjs/common';
import { FinancialTransactionDto } from '../controllers/dtos/create-financial-transactions.dto';

import { FinancialTransactionRepository } from '../financial-transaction.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { FinancialTransaction } from '../entitites/financial-transactions.entity';

@Injectable()
export class FinancialTransactionsService {
  constructor(
    @InjectRepository(FinancialTransaction)
    private readonly financialTransactionsRepository: FinancialTransactionRepository,
  ) {}

  async create(createFinancialTransactions: FinancialTransactionDto) {
    try {
      const test = this.financialTransactionsRepository.create(
        createFinancialTransactions,
      );

      console.log(test);
      await this.financialTransactionsRepository.save(test);
    } catch (error) {
      console.error(error);
    }
  }
}
