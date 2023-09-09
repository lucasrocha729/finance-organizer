import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user.entity';
import { CreateUserDto } from '../dto/create-user-dto';
import { UserRepository } from '../repositories/user-management.repository';

@Injectable()
export class UserManagementService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    console.log(process.env.DB_URL);
    try {
      const test = this.userRepository.create(createUserDto);

      console.log(test);
      await this.userRepository.save(test);
    } catch (error) {
      console.error(error);
    }
  }
}
