import { Controller } from '@nestjs/common';
import { FinancialTransactionsService } from '../services/financial-transactions.service';

@Controller('financial-transactions')
export class FinancialTransactionsController {
  constructor(
    private readonly financialTransactionsService: FinancialTransactionsService,
  ) {}
}
