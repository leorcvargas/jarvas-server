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

export default {
  PORT: parseInt(assertExists(process.env.PORT, 'Missing env.PORT'), 10),
};
