import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import mysql from 'mysql';

const port = 4500;

const app = express();
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

app.listen(port, () => {
  console.log(`Connecting Port is ${port}`);
});
