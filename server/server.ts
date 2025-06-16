import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import mysql from 'mysql';
import compression from 'compression';
import Cryptojs from 'crypto-js';
import dotenv from 'dotenv';
import apicache from 'apicache';
import { GenrateToken } from './jwt/jwt';
import { ErrorHandler, Authcheck, Logger } from './middleware/middleware';
import { RegisterUsers, LoginUser } from './query/qurey';

dotenv.config();
const port = 4500;
const app = express();
let cache = apicache.middleware;
app.use(
  bodyparser.urlencoded({
    extended: true,
  }),
  express.static('./dist/'),
);
app.use(bodyparser.json());
app.use(express.static('./dist/'));
app.use(
  cors({
    origin: '*',
    Credential: true,
  }),
);
app.use(
  compression({
    level: 6,
  }),
);
export const connection = mysql.createConnection({
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
//cache('0 minutes')
app.get('/Genrate/Token', cache('50 minutes'), (req: any, res: any) => {
  if (req) {
    const Token: string = GenrateToken();
    if (typeof Token === 'string') {
      res.status(200).send(Token).end();
    } else res.status(400).send({ error: true, message: 'Bad Request' }).end();
  }
});

app.post('/Register-User', Authcheck, async (req: any, res: any) => {
  if (req) {
    const setcheck: any = Cryptojs.AES.decrypt(
      req?.body?.data,
      `${process.env.REACT_APP_API_KEY}`,
    );
    const decryptedData = JSON.parse(setcheck.toString(Cryptojs.enc.Utf8));
    return RegisterUsers(decryptedData, res);
  }
});

app.post('/Login-User', Authcheck, async (req: any, res: any) => {
  if (req) {
    const setcheck: any = Cryptojs.AES.decrypt(
      req?.body?.data,
      `${process.env.REACT_APP_API_KEY}`,
    );
    const decryptedData = JSON.parse(setcheck.toString(Cryptojs.enc.Utf8));
    return LoginUser(decryptedData, res);
  }
});

app.use((req: any, res: any, next: any) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use(ErrorHandler);

app.listen(port, () => {
  console.log(`Connecting Port is ${port}`);
});
