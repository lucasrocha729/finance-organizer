import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteExpenseCategoryDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
