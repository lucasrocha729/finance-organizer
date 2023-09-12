import { Test, TestingModule } from '@nestjs/testing';
import { UserManagementService } from './user-management.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../models/user.entity';
import { createUserPayload } from '../mocks/created-user.mock';
import { userMock } from '../mocks/user.mock';
import { Repository } from 'typeorm';

describe('UserManagementService', () => {
  let service: UserManagementService;
  let repository: Repository<User>;

  let userMocked = userMock();
  let createuserDtoMock = createUserPayload();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserManagementService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UserManagementService>(UserManagementService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));

    userMocked = userMock();
    createuserDtoMock = createUserPayload();
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return 409 if login is in use ', async () => {
    const userCreateDtoMock = createUserPayload();

    jest.spyOn(repository, 'create').mockImplementation(() => userMocked);
    jest.spyOn(repository, 'findBy').mockImplementation(() => Promise.resolve([userMocked]));

    await service.registerUser(userCreateDtoMock).catch((e) => {
      expect(e.status).toBeGreaterThanOrEqual(409);
      expect(e.status).toBeLessThan(500);
      expect(e.response).toEqual('Invalid login for account registration');
    });
  });

  it('should be return user when creating register with success  ', async () => {
    jest.spyOn(repository, 'create').mockImplementation(() => userMocked);
    jest.spyOn(repository, 'findBy').mockImplementation(() => Promise.resolve([]));
    jest.spyOn(repository, 'save').mockImplementation(() => Promise.resolve(userMocked));

    const sut = await service.registerUser(createuserDtoMock);

    expect(sut).toEqual('User created with success');
  });
});
