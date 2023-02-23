import path from 'path';
import fs from 'fs-extra';
import moment from 'moment';
import { createLogger, transports, format } from 'winston';
import 'winston-daily-rotate-file';

const dateTime = () => moment().format('DD-MM-YYYY hh:mm:ss:SSS A');

const logDirectory = path.join(__dirname, '../../../logs');
if (!fs.existsSync(logDirectory)) fs.mkdirSync(logDirectory);

const customLogFormat = format((options) => {
  options.timestamp = dateTime();
  options.level = options.level.toUpperCase();
  return options;
});

const options = {
  infoFile: {
    level: 'info',
    dirname: logDirectory,
    filename: '%DATE%.log',
    json: true,
    prepend: true,
    zippedArchive: true,
    handleExceptions: true,
    humanReadableUnhandledException: true,
  },
  errorFile: {
    level: 'error',
    dirname: logDirectory,
    filename: '%DATE%-error.log',
    json: true,
    zippedArchive: true,
    handleExceptions: true,
    humanReadableUnhandledException: true,
  },
  console: {
    level: 'info',
    handleExceptions: true,
  },
};

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

const logger = createLogger({
  levels: logLevels,
  format: format.combine(customLogFormat(), format.json(), format.metadata()),
  transports: [new transports.DailyRotateFile(options.infoFile), new transports.Console(options.console)],
  exceptionHandlers: [new transports.DailyRotateFile(options.errorFile), new transports.Console(options.console)],
  exitOnError: false,
});

export default logger;
