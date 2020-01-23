import loadApolloServer from './boot/apolloServer';
import loadDatabase from './boot/database';
import loadExpress from './boot/express';

const createApp = async () => {
  const app = loadExpress();
  await loadApolloServer(app);
  await loadDatabase();

  return app;
};

export default createApp;
