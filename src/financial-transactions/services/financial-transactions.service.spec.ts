import { Test, TestingModule } from '@nestjs/testing';
import { FinancialTransactionsService } from './financial-transactions.service';
import { getRepositoryToken } from '@nestjs/typeorm';

import { FinancialTransaction } from '../entitites/financial-transactions.entity';

describe('FinancialTransactionsService', () => {
  let service: FinancialTransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FinancialTransactionsService,
        {
          provide: getRepositoryToken(FinancialTransaction),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<FinancialTransactionsService>(FinancialTransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
