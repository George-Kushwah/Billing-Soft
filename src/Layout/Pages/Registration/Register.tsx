import React, { memo } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Modal,
  Box,
  Fade,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClearIcon from '@mui/icons-material/Clear';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';
import Cryptojs from 'crypto-js';
import { GetToken } from './../../Data-Query/Register/Genrate-Token';
import { useQueries } from '@tanstack/react-query';

interface IRegprops {
  mopen: boolean;
  handleReg: () => void;
}

interface IFromsdata {
  username: string;
  mobile: number | string;
  password: string;
  cnfpassword: string;
  dob: Dayjs | null;
  role: string;
}

const Register = ({ mopen, handleReg }: IRegprops) => {
  const role: string[] = ['User', 'Admin'];
  const [getTokens]: any = useQueries({
    queries: [GetToken()],
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFromsdata>({
    defaultValues: {
      username: '',
      mobile: '',
      dob: null,
      password: '',
      cnfpassword: '',
      role: '',
    },
  });

  const ValidateDate = (val: Dayjs | null) => {
    if (!val) return 'date is Required';
    else {
      let today: string = moment(new Date()).format('yyyy');
      let date: string = moment(new Date(val.toDate())).format('yyyy');
      if (parseInt(today) - parseInt(date) >= 18) {
        return true;
      } else return false;
    }
  };

  const HandleRole = (ev: boolean | string) => {
    if (ev === '') return false;
    else return true;
  };

  const onSubmit: SubmitHandler<IFromsdata> = (data) => {
    let ds = Cryptojs.AES.encrypt(
      JSON.stringify(data),
      `${process.env.REACT_APP_API_KEY}`,
    ).toString();
    var bytes = Cryptojs.AES.decrypt(ds, `${process.env.REACT_APP_API_KEY}`);
    var decryptedData = JSON.parse(bytes.toString(Cryptojs.enc.Utf8));
    console.log(decryptedData, ds);
  };

  return (
    <>
      <Modal
        open={mopen}
        onClose={handleReg}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
      >
        <Fade in={mopen}>
          <Box className={'Reg-model'}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h3">User Registration</Typography>
                <Grid container alignItems={'center'} rowSpacing={1}>
                  <Grid size={{ lg: 4 }}>
                    <Typography variant="h6">Name</Typography>
                  </Grid>
                  <Grid size={{ lg: 8 }}>
                    <TextField
                      size="small"
                      type="text"
                      placeholder="Name Here"
                      className="input-col"
                      autoComplete="off"
                      {...register('username', {
                        required: true,
                        minLength: 3,
                      })}
                      sx={{
                        width: '95%',
                        input: {
                          color: '#000',
                          fontSize: '14px;',
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: errors?.username ? 'red' : '#000',
                          },
                          '&:hover fieldset': {
                            borderColor: '#999',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: errors?.username ? 'red' : '#000',
                          },
                        },
                      }}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ color: '#666', fontSize: '10' }}
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
                  <Grid size={{ lg: 4 }}>
                    <Typography variant="h6">Mobile</Typography>
                  </Grid>
                  <Grid size={{ lg: 8 }}>
                    <TextField
                      size="small"
                      placeholder="Mobile Number"
                      className="input-col"
                      autoComplete="off"
                      {...register('mobile', {
                        required: true,
                        maxLength: 10,
                        minLength: 10,
                      })}
                      sx={{
                        width: '95%',
                        input: {
                          color: '#000',
                          fontSize: '14px;',
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: errors?.mobile ? 'red' : '#000',
                          },
                          '&:hover fieldset': {
                            borderColor: '#999',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: errors?.mobile ? 'red' : '#000',
                          },
                        },
                      }}
                      slotProps={{
                        htmlInput: {
                          maxLength: 10,
                          type: 'number',
                          // pattern: '[0-9]*',
                        },
                        input: {
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ color: '#666' }}
                            >
                              <PhoneIcon />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                    {errors?.mobile && (
                      <p className="err-mes">
                        Please Enter 10 Digit Mobile Number
                      </p>
                    )}
                  </Grid>
                  <Grid size={{ lg: 4 }}>
                    <Typography variant="h6">Password</Typography>
                  </Grid>
                  <Grid size={{ lg: 8 }}>
                    <TextField
                      size="small"
                      type="password"
                      placeholder="Password"
                      className="input-col"
                      autoComplete="off"
                      {...register('password', {
                        required: true,
                      })}
                      sx={{
                        width: '95%',
                        input: {
                          color: '#000',
                          fontSize: '14px;',
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: errors?.cnfpassword ? 'red' : '#000',
                          },
                          '&:hover fieldset': {
                            borderColor: '#999',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: errors?.cnfpassword ? 'red' : '#000',
                          },
                        },
                      }}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ color: '#666' }}
                            >
                              <VpnKeyIcon />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ lg: 4 }}>
                    <Typography variant="h6">Confirm Password</Typography>
                  </Grid>
                  <Grid size={{ lg: 8 }}>
                    <TextField
                      size="small"
                      type="password"
                      placeholder="Password Confirm"
                      className="input-col"
                      {...register('cnfpassword', {
                        required: true,
                        validate: (value: string) =>
                          value === watch('password') || 'not match',
                      })}
                      sx={{
                        width: '95%',
                        input: {
                          color: '#000',
                          fontSize: '14px;',
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: errors?.cnfpassword ? 'red' : '#000',
                          },
                          '&:hover fieldset': {
                            borderColor: '#999',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: errors?.cnfpassword ? 'red' : '#000',
                          },
                        },
                      }}
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ color: '#666' }}
                            >
                              <VpnKeyIcon />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                    {errors?.cnfpassword && (
                      <p className="err-mes">Password not Match</p>
                    )}
                  </Grid>
                  <Grid size={{ lg: 4 }}>
                    <Typography variant="h6">DOB</Typography>
                  </Grid>
                  <Grid size={{ lg: 8 }}>
                    <Controller
                      name="dob"
                      control={control}
                      rules={{
                        required: 'Please select an option',
                        validate: (val: Dayjs | null) => ValidateDate(val),
                      }}
                      render={({ field }) => (
                        <DatePicker
                          sx={{
                            width: '95%',
                          }}
                          label="Select Date"
                          className={errors?.dob ? 'err-bor' : ''}
                          {...field}
                          minDate={dayjs().subtract(35, 'year')}
                          maxDate={dayjs().subtract(0, 'day')}
                        />
                      )}
                    ></Controller>
                    {errors?.dob && (
                      <p className="err-mes">Please select DOB 18+</p>
                    )}
                  </Grid>
                  <Grid size={{ lg: 4 }}>
                    <Typography variant="h6">Role</Typography>
                  </Grid>
                  <Grid size={{ lg: 8 }}>
                    <Controller
                      name="role"
                      control={control}
                      rules={{
                        required: true,
                        validate: (val: boolean | string): boolean =>
                          HandleRole(val),
                      }}
                      render={({ field }) => (
                        <FormControl
                          fullWidth
                          sx={{ width: '95%' }}
                          variant="outlined"
                        >
                          <InputLabel id=""> Role</InputLabel>
                          <Select
                            {...field}
                            className={errors?.dob ? 'err-bor' : ''}
                          >
                            {role.map((item: string, ind: number) => (
                              <MenuItem
                                key={ind}
                                value={item}
                                sx={{
                                  '&:hover': {
                                    color: '#000',
                                  },
                                }}
                              >
                                {item}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    ></Controller>
                    {errors?.role && (
                      <p className="err-mes">Please select User Role</p>
                    )}
                  </Grid>
                  <Grid size={{ lg: 4 }}></Grid>
                  <Grid size={{ lg: 6 }}>
                    <Button
                      sx={{ mt: 2 }}
                      variant="contained"
                      type="submit"
                      startIcon={<ArrowForwardIosIcon />}
                    >
                      Submit
                    </Button>
                    <Button
                      type="reset"
                      sx={{ mt: 2 }}
                      variant="contained"
                      color="error"
                      startIcon={<ClearIcon />}
                      onClick={() => {
                        handleReg();
                        reset();
                      }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </LocalizationProvider>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
export default memo(Register);
