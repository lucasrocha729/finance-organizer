import { Module } from '@nestjs/common';
import { FinancialTransactionsModule } from './financial-transactions/financial-transactions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserManagementModule } from './user-management/user-management.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'finance-organizer',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: ['dist/migrations/*{.ts ,.js}'],
      synchronize: false,
      autoLoadEntities: false,
    }),
    FinancialTransactionsModule,
    UserManagementModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
