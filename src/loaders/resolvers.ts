import fs from 'fs';
import path from 'path';

const loadResolvers = () => {
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

  return resolvers;
};

export default loadResolvers;
