import React, { useCallback } from 'react';
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
const Registration = React.lazy(() => import('./../Registration/Register'));

const Index = () => {
  const [Mopen, setMopen] = React.useState<boolean>(false);
  const HandleCloseRegistration = useCallback(() => {
    setMopen(false);
  }, [Mopen]);
  return (
    <>
      <div className="login-bg">
        <div className="login-bg-inner">
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
              </Grid>
              <Grid size={{ lg: 12 }}>
                <TextField
                  label="Password"
                  size="small"
                  type="password"
                  placeholder="Password"
                  className="input-col"
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
              </Grid>
              <Grid size={{ lg: 12 }} className="login-btn">
                <Button variant="contained" startIcon={<ArrowRightAltIcon />}>
                  Submit
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GroupAddIcon />}
                  onClick={() => setMopen(true)}
                >
                  Registration
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <Registration mopen={Mopen} handleReg={HandleCloseRegistration} />
    </>
  );
};

export default Index;
