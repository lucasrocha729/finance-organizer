import { IsString, IsNotEmpty, IsNumber, IsEnum, IsOptional } from 'class-validator';
import { FormOfPaymentEnum } from 'src/financial-transactions/enums/form-of-payment';
import { TransactionTypeEnum } from 'src/financial-transactions/enums/transaction-type';

export class FinancialTransactionDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @IsNotEmpty()
  @IsEnum(TransactionTypeEnum)
  type: TransactionTypeEnum;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsEnum(FormOfPaymentEnum)
  @IsOptional()
  formOfPayment: FormOfPaymentEnum;

  @IsString()
  @IsOptional()
  comment: string;
}
