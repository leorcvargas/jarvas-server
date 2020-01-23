import dotenv from 'dotenv';
import path from 'path';
import assertExists from 'ts-assert-exists';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config({
  path: path.resolve(__dirname, '..', '..', `.env.${process.env.NODE_ENV}`),
});

if (!envFound) {
  throw new Error('Missing .env file');
}

const getValueFromProcessEnv = (name: string, required = true) => {
  const envVarValue = process.env[name];

  if (required) {
    return assertExists(envVarValue, `Missing env.${name}`);
  }

  return envVarValue;
};


export const getConfig = () => ({
  PORT: parseInt(getValueFromProcessEnv('PORT'), 10),
  
  DB_HOST: getValueFromProcessEnv('DB_HOST'),
  DB_PORT: parseInt(getValueFromProcessEnv('DB_PORT'), 10),
  DB_NAME: getValueFromProcessEnv('DB_NAME'),
  DB_USERNAME: getValueFromProcessEnv('DB_USERNAME'),
  DB_PASSWORD: getValueFromProcessEnv('DB_PASSWORD'),
  DB_SYNC: !!getValueFromProcessEnv('DB_SYNC', false),
});

export type Config = ReturnType<typeof getConfig>;
