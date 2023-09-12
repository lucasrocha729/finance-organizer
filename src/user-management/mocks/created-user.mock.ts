import { CreateUserDto } from '../dto/create-user-dto';

export const createUserPayload = (): CreateUserDto => {
  return {
    login: 'fake-login',
    name: 'fake-name',
    password: 'fake-password',
  };
};
