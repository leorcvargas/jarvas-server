import { Query, Resolver } from 'type-graphql';

import User from './entity';
import { UserService } from './service';

@Resolver(User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Query(() => [User])
  public listUsers() {
    const users = this.userService.findAll();

    return users;
  }
}
