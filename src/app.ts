import Container from 'typedi';
import TypeORM from 'typeorm';

import loadApolloServer from './loaders/apolloServer';
import loadExpress from './loaders/express';

const createApp = async () => {
  TypeORM.useContainer(Container);

  const app = loadExpress();
  await loadApolloServer(app);

  return app;
};

export default createApp;
