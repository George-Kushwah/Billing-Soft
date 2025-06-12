import React, { useCallback, useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useForm, SubmitHandler } from 'react-hook-form';
import Cryptojs from 'crypto-js';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { useQueries } from '@tanstack/react-query';
import { GetToken } from './../../Data-Query/Register/Genrate-Token';
import { Cookiesget } from './../../Custom-Elements/Buttonclick';
import { LoginUser } from './../../Data-Query/Login/Login-user';
const Registration = React.lazy(() => import('./../Registration/Register'));

interface ILoginProps {
  username: string;
  password: string;
}

const Index = () => {
  const [Mopen, setMopen] = React.useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);
  const [errmess, setErrmess] = useState<string>('');
  const [getTokens]: any = useQueries({
    queries: [GetToken()],
  });
  const loginUser = LoginUser();
  const HandleCloseRegistration = useCallback(() => {
    setMopen(false);
  }, [Mopen]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginProps>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const LoginWith = (token: any, data: any) => {
    loginUser.mutate({
      token: token,
      payload: { data: data },
    });
  };

  const onSubmit: SubmitHandler<ILoginProps> = async (data) => {
    try {
      let datas = Cryptojs.AES.encrypt(
        JSON.stringify(data),
        `${process.env.REACT_APP_API_KEY}`,
      ).toString();
      const getcookies = Cookies.get('token');
      if (getcookies !== undefined && getcookies !== '') {
        const decoded: any = jwtDecode(getcookies);
        const expireDate: any = new Date(decoded?.exp * 1000);
        if (Date.now() >= expireDate) {
          await Cookiesget(getTokens, setErr, setErrmess);
          const getCookies = Cookies.get('token');
          LoginWith(getCookies, datas);
        } else {
          LoginWith(getcookies, datas);
        }
      } else {
        await Cookiesget(getTokens, setErr, setErrmess);
        const getcookies = Cookies.get('token');
        LoginWith(getcookies, datas);
      }
    } catch (err: any) {
      return err;
    }
  };

  return (
    <>
      <div className="login-bg">
        <div className="login-bg-inner">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container alignItems={'center'}>
              <Grid size={{ lg: 6 }} className="company_logo">
                <Typography variant="h4">Company Name</Typography>
              </Grid>
              <Grid size={{ lg: 6 }} className="login-frm">
                <Typography variant="h4">
                  Admin Login <PeopleIcon />
                </Typography>
                <Grid size={{ lg: 12 }}>
                  <TextField
                    label="User Name"
                    size="small"
                    type="text"
                    placeholder="User Name"
                    className="input-col"
                    autoComplete="off"
                    {...register('username', {
                      required: true,
                      minLength: 3,
                    })}
                    sx={{
                      input: {
                        color: '#fff',
                        fontSize: '14px;',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#fff', // default border
                        },
                        '&:hover fieldset': {
                          borderColor: '#fff', // border on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#fff', // border on focus
                        },
                      },
                      '& label': {
                        color: '#fff',
                      },
                      '& label.Mui-focused': {
                        color: '#fff',
                      },
                    }}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ color: '#d4d4d4' }}
                          >
                            <PersonOutlineIcon />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                  {errors?.username && (
                    <p className="err-mes">Name is Required</p>
                  )}
                </Grid>
                <Grid size={{ lg: 12 }}>
                  <TextField
                    label="Password"
                    size="small"
                    type="password"
                    placeholder="Password"
                    className="input-col"
                    {...register('password', {
                      required: true,
                      minLength: 3,
                    })}
                    sx={{
                      input: {
                        color: '#fff',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#fff', // default border
                        },
                        '&:hover fieldset': {
                          borderColor: '#fff', // border on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#fff', // border on focus
                        },
                      },

                      '& label': {
                        color: '#fff',
                      },
                      '& label.Mui-focused': {
                        color: '#fff',
                      },
                    }}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ color: '#d4d4d4' }}
                          >
                            <VpnKeyIcon />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                  {errors?.password && (
                    <p className="err-mes">Password is Required</p>
                  )}
                </Grid>
                <Grid size={{ lg: 12 }} className="login-btn">
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<ArrowRightAltIcon />}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<GroupAddIcon />}
                    onClick={() => {
                      setMopen(true);
                      reset();
                    }}
                  >
                    Registration
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
      <Registration mopen={Mopen} handleReg={HandleCloseRegistration} />
    </>
  );
};

export default Index;
