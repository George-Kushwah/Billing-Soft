import { connection } from './../server';
import bcrypt from 'bcrypt';
import moment from 'moment';
import Cryptojs from 'crypto-js';

export const RegisterUsers = async (data: any, res: any) => {
  try {
    const newPassword = await bcrypt.hash(data?.cnfpassword, 10);
    const newDate = moment(data?.dob).format('MM/DD/YYYY');
    connection.query(
      `INSERT INTO users (id, name, mobile, password, age, permission) VALUES ("null", "${data?.username}","${data?.mobile}","${newPassword}","${newDate}","${data?.role}");`,
      (err: any, result: any) => {
        if (!err) {
          res
            .status(200)
            .send({
              message: 'Record update successfully',
              data: result,
              error: false,
              status: 200,
            })
            .end();
        } else {
          res
            .status(403)
            .send({
              message: 'Record not update successfully',
              data: [],
              error: true,
              status: 403,
            })
            .end();
        }
      },
    );
  } catch (error) {
    res
      .status(403)
      .send({
        message: 'Record not update successfully',
        data: [],
        error: true,
        status: 403,
      })
      .end();
  }
};

export const LoginUser = async (data: any, res: any) => {
  try {
    await connection.query(
      `select * from users where name=?`,
      [data?.username],
      (err: any, result: any) => {
        if (!err && result.length > 0) {
          bcrypt.compare(
            data?.password,
            result[0]?.password,
            (errs: any, results: any) => {
              if (results) {
                let datas = Cryptojs.AES.encrypt(
                  JSON.stringify({
                    name: result[0]?.name,
                    role: result[0]?.permission,
                    id: result[0]?.id,
                  }),
                  `${process.env.REACT_APP_API_KEY}`,
                ).toString();
                res
                  .status(200)
                  .send({
                    error: false,
                    data: datas,
                    status: 200,
                  })
                  .end();
              } else
                res
                  .status(404)
                  .send({
                    message: 'Record not Found',
                    data: [errs],
                    error: true,
                    status: 404,
                  })
                  .end();
            },
          );
        } else {
          res
            .status(404)
            .send({
              message: 'Record not Found',
              data: [null],
              error: true,
              status: 404,
            })
            .end();
        }
      },
    );
  } catch (error) {
    res
      .status(404)
      .send({
        message: 'Record not Found',
        data: [null],
        error: true,
        status: 404,
      })
      .end();
  }
};
