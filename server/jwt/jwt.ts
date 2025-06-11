import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import moment from 'moment';
dotenv.config();

export interface AuthenticatedRequest extends Request {
  user?: string | JwtPayload;
}

type users = {
  id: number;
  company: string;
  location: string;
  expirein: string;
  date: string;
  role: string[];
};

export const Payloads: users = {
  id: Math.floor(Math.random() * 90000),
  company: 'senter',
  location: 'Agra',
  date: moment(new Date()).format('MM/DD/YYYY'),
  expirein: '1h',
  role: [],
};

export function GenrateToken() {
  const newToken = jwt.sign(Payloads, process.env.REACT_APP_JWT_KEY, {
    expiresIn: '1h',
  });
  return newToken;
}
