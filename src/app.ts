import Container from 'typedi';
import TypeORM from 'typeorm';

import createApolloServer from './boot/apolloServer';
import createExpress from './boot/express';

const createApp = async () => {
  TypeORM.useContainer(Container);

  const app = createExpress();
  await createApolloServer(app);

  return app;
};

export default createApp;
