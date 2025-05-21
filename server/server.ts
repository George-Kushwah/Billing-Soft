import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import mysql from 'mysql';
import compression from 'compression';
const route = express.Router();

const port = 4500;

const app = express();
app.use(
  compression({
    level: 6,
  }),
);
app.use(bodyparser.json());
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

const logger = (req: any, res: any, next: any) => {
  if (req.query.age < 18) {
    res.send('Please enter vailid age');
  } else {
    console.log(req.method, req.url);
    next();
  }
};

route.use(logger);

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

app.get('/gets', (req: any, res: any) => {
  if (req) {
    res.send('Hello world');
  }
});
route.get('/about', (req: any, res: any) => {
  if (req) {
    res.send('Hello about world');
  }
});

app.use((req: any, res: any, next: any) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use('/', route);

app.listen(port, () => {
  console.log(`Connecting Port is ${port}`);
});
