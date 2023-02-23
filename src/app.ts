import 'module-alias/register';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import mongoSanitize from 'express-mongo-sanitize';

import routes from '@src/routes';
import { config } from '@src/@speak-common/config';
import logger from '@src/@speak-common/config/logger';

import { createComponent } from './template/index';

// Database connection
import '@src/@speak-common/config/database';

// .env config file
dotenv.config();

const app = express();

app.use(express.json({ limit: 5242880 }));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(cors());
app.set('trust proxy', 1);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,  X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, x-speakai-embed-token',
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, DELETE, POST, PATCH');
    return res.status(200).json({});
  }

  next();
});

/* Middleware */
app.use(mongoSanitize());

app.get('/', (req: Request, res: Response) => {
  res.send('Bad Request');
});

// API Routes
app.use(routes);

/* Find Exception and send email to admin */
process.on('uncaughtException', (error: Error) => {
  logger.error('Uncaught Exception', error);
});

// Promise Rejection errors to admin
process.on('unhandledRejection', (error: Error) => {
  logger.error('Unhandled Rejection', error);
});

try {
  app.listen(config.server.port, () => {
    logger.info(`Running server on port: ${config.server.port}`);

    /**
     * TODO: Run the template script to create a component
     */
    createComponent('test');
    process.exit(1)
  });
} catch (error) {
  logger.error(`Something bad happened: ${error}`);
  process.exit(1);
}
