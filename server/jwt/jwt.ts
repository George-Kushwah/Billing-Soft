import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
dotenv.config();

export interface AuthenticatedRequest extends Request {
  user?: string | JwtPayload;
}

type users = {
  id: number;
  company: string;
  location: string;
  expirein: string;
  date: Date;
};

export const Payloads: users = {
  id: Math.floor(Math.random() * 90000),
  company: 'senter',
  location: 'Agra',
  date: new Date(),
  expirein: '1h',
};

export function GenrateToken() {
  const newToken = jwt.sign(Payloads, process.env.REACT_APP_JWT_KEY, {
    expiresIn: '1h',
  });
  return newToken;
}

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({ message: 'Access Denied: No Token Provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.REACT_APP_JWT_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or Expired Token' });
  }
};
