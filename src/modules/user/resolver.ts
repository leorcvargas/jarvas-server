import { Query, Resolver } from 'type-graphql';

import User from './entity';

@Resolver(User)
export default class UserResolver {
  @Query(() => [User])
  public listUsers() {
    const users: User[] = [
      { id: 1, email: 'leo@dev.com' },
      { id: 2, email: 'leo+2@dev.com' },
    ];

    return users;
  }
}
