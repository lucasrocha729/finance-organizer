import { Repository } from 'typeorm';
import { User } from '../models/user.entity';

export class UserRepository extends Repository<User> {}
