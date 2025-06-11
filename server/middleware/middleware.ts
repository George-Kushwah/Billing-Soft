import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
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
      if (err) res.status(403).json({ message: 'Invalid or Expired Token' });
      else next();
    }) as JwtPayload;
  } catch (err) {
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
  next();
};

export const Logger = (req: any, res: any, next: any) => {
  //console.log('res');
  next();
};
