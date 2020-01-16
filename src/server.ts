import createApp from './app';
import config from './config';

const startServer = () => {
  const app = createApp();

  app.listen(config.PORT, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`> Server started on port ${config.PORT}`);
  })
};

startServer();
