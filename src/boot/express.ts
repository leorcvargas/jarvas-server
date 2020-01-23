import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const loadExpress = () => {
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

  return app;
};
export default loadExpress;
