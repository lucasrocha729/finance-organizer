import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { FormOfPaymentEnum } from 'src/financial-transactions/enums/form-of-payment';
import { TransactionType } from 'src/financial-transactions/enums/transaction-type';

export class FinancialTransactionDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @IsNotEmpty()
  @IsEnum(TransactionType)
  type: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsEnum(FormOfPaymentEnum)
  @IsOptional()
  formOfPayment: string;

  @IsString()
  @IsOptional()
  comment: string;
}
