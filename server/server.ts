import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import mysql from 'mysql';
import compression from 'compression';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import apicache from 'apicache';
import { GenrateToken } from './jwt/jwt';
import { ErrorHandler, Authcheck, Logger } from './middleware/middleware';

dotenv.config();
const port = 4500;
const app = express();
let cache = apicache.middleware;
app.use(cookieParser());
app.use(
  bodyparser.urlencoded({
    extended: true,
  }),
  express.static('./dist/'),
);
app.use(express.static('./dist/'));
app.use(
  cors({
    Credential: true,
    origin: '*',
  }),
);
app.use(bodyparser.json());
app.use(
  compression({
    level: 6,
  }),
);
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'roots',
  password: 'admin',
  database: 'billing',
});
connection.connect(function (err: any) {
  if (err) throw err;
  console.log('Connected!');
});
app.use(Logger);

app.get('/Genrate/Token', cache('59 minutes'), (req: any, res: any) => {
  if (req) {
    const Token: string = GenrateToken();
    if (typeof Token === 'string') {
      res.cookie('AuthToken', Token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      });
      console.log('web log');
      res.status(200).send(Token).end();
    }
  }
});

app.post('/Register-User', Authcheck, (req: any, res: any) => {
  if (req) {
    res.json({
      message: 'Protected content accessed!',
    });
  }
});

app.use((req: any, res: any, next: any) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use(ErrorHandler);

app.listen(port, () => {
  console.log(`Connecting Port is ${port}`);
});
