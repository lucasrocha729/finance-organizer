import { Injectable } from '@nestjs/common';
import { FinancialTransactionDto } from '../controllers/dtos/create-financial-transactions.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FinancialTransaction } from '../models/financial-transactions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FinancialTransactionsService {
  constructor(
    @InjectRepository(FinancialTransaction)
    private readonly financialTransactionsRepository: Repository<FinancialTransaction>,
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
