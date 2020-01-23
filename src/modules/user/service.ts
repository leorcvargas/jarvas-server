import { Service } from 'typedi';

import User from './entity';

@Service()
export class UserService {
  public findAll(): User[] {
    const users: User[] = [
      { id: 1, email: 'leo@dev.com' },
      { id: 2, email: 'leo+2@dev.com' },
    ];

    return users;
  }
}
