import { User } from '../models/user.entity';

export const userMock = (): User => {
  return {
    id: 'id-mock',
    login: 'login-mock',
    name: 'name-mock',
    password: 'password-mock',
  };
};
