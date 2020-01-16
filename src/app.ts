import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import typeDefs from './typeDefs';

const createApp = () => {
  const app = express();

  app.get('/healthcheck', (req, res) => {
    res.status(200).send();
  });

  app.head('/healthcheck', (req, res) => {
    res.status(200).send();
  });

  app.enable('trust proxy');
  app.use(cors());
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.status(200).send('Hello!');
  });

  const apollo = new ApolloServer({
    typeDefs,
  });
  apollo.applyMiddleware({ app });

  return app;
};

export default createApp;
