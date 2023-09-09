import { Module } from '@nestjs/common';
import { FinancialTransactionsModule } from './financial-transactions/financial-transactions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserManagementModule } from './user-management/user-management.module';
import { ExpenseCategoryModule } from './expense-category/expense-category.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: ['dist/migrations/*{.ts ,.js}'],
      synchronize: false,
      autoLoadEntities: false,
    }),
    FinancialTransactionsModule,
    UserManagementModule,
    ExpenseCategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
