import { createLogger, format, transports } from 'winston';
import winston from 'winston';
import 'winston-daily-rotate-file';
import fs from 'fs-extra';
import path from 'path';
const logDir = path.resolve('./logs');
await fs.ensureDir(logDir);

const combinedLog = path.join(logDir, 'combined.log');
const errorLog = path.join(logDir, 'error.log');

const transport = new winston.transports.DailyRotateFile({
  filename: combinedLog, // Log file pattern
  datePattern: 'YYYY-MM-DD', // Date format for the filename
  zippedArchive: false, // Set to true if you want to zip old logs
  maxFiles: '1d', // Keep logs for 7 days
  level: 'info', // Minimum log level
});

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.printf(({ timestamp, level, message, stack }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${stack || message}`;
    }),
    format.json(),
    format.prettyPrint(),
  ),
  transports: [
    //new transports.Console(),
    transport,
    new transports.File({ filename: errorLog, level: 'error' }),
  ],
});

export default logger;
