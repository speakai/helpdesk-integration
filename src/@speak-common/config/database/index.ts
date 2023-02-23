import mongoose from 'mongoose';
import logger from '@src/@speak-common/config/logger';
import { config } from '../index';

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

mongoose
  .connect(config.dbUrl as string, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      logger.info('Database is connected!');
      logger.info(`Speak env - ${config.env}`);
    },
    (err) => {
      if (err.message.code === 'ETIMEDOUT' || err.message.code === 'MongoTimeoutError') {
        logger.info('Attempting to re-establish database connection.');
        mongoose.connect(config.dbUrl as string);
        return '';
      }
      logger.error(`Can not connect to the database ${err}`);
      return process.exit(1);
    },
  );
