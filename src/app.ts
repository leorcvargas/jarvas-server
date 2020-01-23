import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { buildSchema } from 'type-graphql';
import Container from 'typedi';

import loadResolvers from './loaders/resolvers';

const createApp = async () => {
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
    schema: await buildSchema({
      resolvers: loadResolvers(),
      container: Container,
    }),
  });
  apollo.applyMiddleware({ app });
  return app;
};

export default createApp;
