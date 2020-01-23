import loadApolloServer from './boot/apolloServer';
import loadConfig from './boot/config';
import loadDatabase from './boot/database';
import loadExpress from './boot/express';

const createApp = async () => {
  loadConfig();

  const app = loadExpress();
  await loadApolloServer(app);
  await loadDatabase();

  return app;
};

export default createApp;
