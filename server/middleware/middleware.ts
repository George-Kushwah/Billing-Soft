import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import logger from './../loging/logs';
dotenv.config();
export const Authcheck = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({ message: 'Access Denied: No Token Provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    jwt.verify(token, process.env.REACT_APP_JWT_KEY, (err: any) => {
      if (err) {
        const error: any = {
          errcode: 500,
          message: 'Invalid or Expired Token',
        };
        logger.error('error', error);
        res.status(403).json({ message: 'Invalid or Expired Token' });
      } else next();
    }) as JwtPayload;
  } catch (err) {
    const error: any = {
      errcode: 500,
      message: 'Server Internal Error',
    };
    logger.error('error', error);
    return res.status(500).json({ message: 'Server Internal Error' });
  }
};

export const ErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    message: message,
    //stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
  const error: any = {
    errcode: err.statusCode,
    message: err.message,
  };
  logger.error('error', error);
  next();
};

export const Logger = (req: any, res: any, next: any) => {
  const { method, url } = req;
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const logMessage = `${method} ${url} ${res.statusCode} - ${duration}ms`;
    const datas: any = {
      url: url,
      method: method,
      code: res?.statusCode,
      data: req.body,
    };
    logger.info(logMessage, datas);
  });
  next();
};
