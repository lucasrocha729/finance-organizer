import { Body, Controller, Post } from '@nestjs/common';
import { UserManagementService } from '../services/user-management.service';
import { CreateUserDto } from '../dto/create-user-dto';

@Controller('user-management')
export class UserManagementController {
  constructor(private readonly userManagementService: UserManagementService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<string> {
    return this.userManagementService.registerUser(createUserDto);
  }
}
