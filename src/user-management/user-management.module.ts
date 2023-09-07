import { Module } from '@nestjs/common';
import { UserManagementService } from './services/user-management.service';
import { UserManagementController } from './controllers/user-management.controller';
import { User } from './models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserManagementService],
  controllers: [UserManagementController],
})
export class UserManagementModule {}
