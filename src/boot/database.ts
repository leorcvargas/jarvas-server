import fs from 'fs';
import path from 'path';
import Container from 'typedi';
import * as TypeORM from 'typeorm';

import config from '../config';

const loadDatabase = async () => {
  TypeORM.useContainer(Container);

  const modules = fs.readdirSync(path.resolve(__dirname, '..', 'modules'));
  const entities = modules.map(module => {
    const entityPath = path.resolve(
      __dirname,
      '..',
      'modules',
      module,
      'entity.ts',
    );
    return require(entityPath).default;
  });

  await TypeORM.createConnection({
    type: 'postgres',
    host: config.DB_HOST,
    port: config.DB_PORT,
    database: config.DB_NAME,
    username: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    synchronize: config.DB_SYNC,
    logger: 'debug',
    logging: 'all',
    entities,
  });
};

export default loadDatabase;
