import { Container } from 'typedi';

import { getConfig } from '../config';

const loadConfig = () => {
  const config = getConfig();

  Container.set('app.config', config);
};

export default loadConfig;
