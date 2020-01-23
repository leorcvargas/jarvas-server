import loadConfig from '../src/boot/config';
import loadDatabase from '../src/boot/database';
import { seedUsers } from './users';

const startSeed = async () => {
  console.log('> Seed started');
  
  loadConfig();
  
  await loadDatabase();
  
  await seedUsers()
};

startSeed();
