import { ApolloServer } from 'apollo-server-express';
import { Express } from 'express';
import fs from 'fs';
import path from 'path';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';

const createApolloServer = async (app: Express) => {
  const modules = fs.readdirSync(path.resolve(__dirname, '..', 'modules'));
  const resolvers = modules.map(module => {
    const resolverPath = path.resolve(
      __dirname,
      '..',
      'modules',
      module,
      'resolver.ts',
    );
    return require(resolverPath);
  });

  const apollo = new ApolloServer({
    schema: await buildSchema({
      resolvers,
      container: Container,
    }),
  });
  apollo.applyMiddleware({ app });
};

export default createApolloServer;
