import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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

  async registerUser(createUserDto: CreateUserDto): Promise<string> {
    const user = this.userRepository.create(createUserDto);

    const usersWithThisLogin = await this.userRepository.findBy([{ login: user.login }]);

    if (usersWithThisLogin.length) {
      throw new HttpException('Invalid login for account registration', HttpStatus.CONFLICT);
    }

    await this.userRepository.save(user);

    return 'User created with success';
  }
}
