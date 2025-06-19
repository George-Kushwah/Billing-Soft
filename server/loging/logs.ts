import { createLogger, format, transports } from 'winston';
import fs from 'fs-extra';
import path from 'path';
const logDir = path.resolve('./logs');
await fs.ensureDir(logDir);

const combinedLog = path.join(logDir, 'combined.log');
const errorLog = path.join(logDir, 'error.log');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.printf(({ timestamp, level, message, stack }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${stack || message}`;
    }),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: combinedLog }),
    new transports.File({ filename: errorLog, level: 'error' }),
  ],
});

export default logger;
