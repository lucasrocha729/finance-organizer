import { Module } from '@nestjs/common';
import { FinancialTransactionsModule } from './financial-transactions/financial-transactions.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    FinancialTransactionsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
