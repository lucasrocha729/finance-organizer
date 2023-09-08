import { Test, TestingModule } from '@nestjs/testing';
import { FinancialTransactionsController } from './financial-transactions.controller';
import { FinancialTransactionsService } from '../services/financial-transactions.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FinancialTransaction } from '../entitites/financial-transactions.entity';

describe('FinancialTransactionsController', () => {
  let controller: FinancialTransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancialTransactionsController],
      providers: [
        FinancialTransactionsService,
        {
          provide: getRepositoryToken(FinancialTransaction),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<FinancialTransactionsController>(
      FinancialTransactionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
