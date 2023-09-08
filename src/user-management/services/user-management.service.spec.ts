import { Test, TestingModule } from '@nestjs/testing';
import { UserManagementService } from './user-management.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../models/user.entity';

describe('UserManagementService', () => {
  let service: UserManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserManagementService,
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UserManagementService>(UserManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
