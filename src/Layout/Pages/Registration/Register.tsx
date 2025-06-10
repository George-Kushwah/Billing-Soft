import React, { memo, useState } from 'react';
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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClearIcon from '@mui/icons-material/Clear';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
interface IRegprops {
  mopen: boolean;
  handleReg: () => void;
}

const Register = ({ mopen, handleReg }: IRegprops) => {
  const [mobie, setMobile] = useState<number | string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<any>('');
  const [passwordcnf, setPasswordcnf] = useState<any>('');
  const [dob, setDob] = useState<Dayjs | null>(dayjs());
  const [getrole, setGetrole] = useState<string>('');
  const [role, setRole] = useState<string[]>(['User', 'Admin']);

  const GetMobnumber = (ev: any) => {
    if (ev.target.value.length === 11) {
      return;
    } else {
      setMobile(ev.target.value);
    }
  };

  const HandleRole = (ev: any) => {
    setGetrole(ev.target.value);
  };
  console.log(dob);

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
            <Typography variant="h3">User Registration</Typography>
            <Grid container alignItems={'center'} rowSpacing={1}>
              <Grid size={{ lg: 4 }} className="company_logo">
                <Typography variant="h6">Name</Typography>
              </Grid>
              <Grid size={{ lg: 8 }} className="company_logo">
                <TextField
                  size="small"
                  type="text"
                  placeholder="Name Here"
                  className="input-col"
                  autoComplete="off"
                  value={name}
                  onChange={(ev: any) => setName(ev.target.vaue)}
                  sx={{
                    width: '95%',
                    input: {
                      color: '#000',
                      fontSize: '14px;',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#000', // default border
                      },
                      '&:hover fieldset': {
                        borderColor: '#999', // border on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#000', // border on focus
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
              </Grid>
              <Grid size={{ lg: 4 }} className="company_logo">
                <Typography variant="h6">Mobile</Typography>
              </Grid>
              <Grid size={{ lg: 8 }} className="company_logo">
                <TextField
                  size="small"
                  placeholder="Mobile Number"
                  className="input-col"
                  autoComplete="off"
                  value={mobie}
                  onChange={(ev: any) => GetMobnumber(ev)}
                  sx={{
                    width: '95%',
                    input: {
                      color: '#000',
                      fontSize: '14px;',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#000', // default border
                      },
                      '&:hover fieldset': {
                        borderColor: '#999', // border on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#000', // border on focus
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
                        <InputAdornment position="start" sx={{ color: '#666' }}>
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Grid>
              <Grid size={{ lg: 4 }} className="company_logo">
                <Typography variant="h6">Password</Typography>
              </Grid>
              <Grid size={{ lg: 8 }} className="company_logo">
                <TextField
                  size="small"
                  type="text"
                  placeholder="Password"
                  className="input-col"
                  autoComplete="off"
                  value={password}
                  onChange={(ev: any) => setPassword(ev.target.value)}
                  sx={{
                    width: '95%',
                    input: {
                      color: '#000',
                      fontSize: '14px;',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#000', // default border
                      },
                      '&:hover fieldset': {
                        borderColor: '#999', // border on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#000', // border on focus
                      },
                    },
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start" sx={{ color: '#666' }}>
                          <VpnKeyIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Grid>
              <Grid size={{ lg: 4 }} className="company_logo">
                <Typography variant="h6">Confirm Password</Typography>
              </Grid>
              <Grid size={{ lg: 8 }} className="company_logo">
                <TextField
                  size="small"
                  type="text"
                  placeholder="Password Confirm"
                  className="input-col"
                  autoComplete="off"
                  value={passwordcnf}
                  onChange={(ev: any) => setPasswordcnf(ev.target.value)}
                  sx={{
                    width: '95%',
                    input: {
                      color: '#000',
                      fontSize: '14px;',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#000', // default border
                      },
                      '&:hover fieldset': {
                        borderColor: '#999', // border on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#000', // border on focus
                      },
                    },
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start" sx={{ color: '#666' }}>
                          <VpnKeyIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Grid>
              <Grid size={{ lg: 4 }} className="company_logo">
                <Typography variant="h6">DOB</Typography>
              </Grid>
              <Grid size={{ lg: 8 }} className="company_logo">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{
                      width: '95%',
                    }}
                    label="Select Date"
                    value={dob}
                    onChange={(ev: Dayjs | null) => setDob(ev)}
                    minDate={dayjs().subtract(35, 'year')}
                    maxDate={dayjs().subtract(0, 'day')}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid size={{ lg: 4 }} className="company_logo">
                <Typography variant="h6">Role</Typography>
              </Grid>
              <Grid size={{ lg: 8 }} className="company_logo">
                <FormControl fullWidth sx={{ width: '95%' }} variant="outlined">
                  <InputLabel id=""> Role</InputLabel>
                  <Select
                    label="Role"
                    value={getrole}
                    onChange={(ev: any) => HandleRole(ev)}
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
              </Grid>
              <Grid size={{ lg: 4 }} className="company_logo"></Grid>
              <Grid size={{ lg: 6 }} className="company_logo">
                <Button
                  sx={{ mt: 2 }}
                  variant="contained"
                  startIcon={<ArrowForwardIosIcon />}
                >
                  Submit
                </Button>
                <Button
                  sx={{ mt: 2 }}
                  variant="contained"
                  color="error"
                  startIcon={<ClearIcon />}
                  onClick={handleReg}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
export default memo(Register);
