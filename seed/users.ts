import faker from 'faker';
import * as TypeORM from 'typeorm';

import User from '../src/modules/user/entity';

export const seedUsers = async () => {
  console.log('> seed users');
  const userRepository = TypeORM.getRepository(User);

  const usersSeeds = [];
  const amount = 5;

  for (let i = 0; i < amount; i++) {
    usersSeeds.push({ email: faker.internet.email() });
  }

  const savingSeeds = usersSeeds.map(seed => userRepository.save(seed));

  await Promise.all(savingSeeds);
};
