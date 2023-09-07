import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user-dto';

@Injectable()
export class UserManagementService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const test = this.userRepository.create(createUserDto);

      console.log(test);
      await this.userRepository.save(test);
    } catch (error) {
      console.error(error);
    }
  }
}
