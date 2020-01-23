import createApp from './app';
import config from './config';

import loggerFactory from './shared/logger';

const logger = loggerFactory('server');

const startServer = async () => {
  const app = await createApp();

  app.listen(config.PORT, err => {
    if (err) {
      logger.error(err.message);
      process.exit(1);
    }

    logger.info(`Server started on port ${config.PORT}`);
  });
};

startServer();
