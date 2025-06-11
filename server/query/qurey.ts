import { connection } from './../server';
import bcrypt from 'bcrypt';
import moment from 'moment';

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
