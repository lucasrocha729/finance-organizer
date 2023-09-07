import { Module } from '@nestjs/common';
import { UserManagementService } from './services/user-management.service';
import { UserManagementController } from './controllers/user-management.controller';

@Module({
  providers: [UserManagementService],
  controllers: [UserManagementController],
})
export class UserManagementModule {}
