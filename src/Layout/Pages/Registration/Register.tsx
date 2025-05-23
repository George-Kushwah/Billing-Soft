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
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClearIcon from '@mui/icons-material/Clear';
interface IRegprops {
  mopen: boolean;
  handleReg: () => void;
}

const Register = ({ mopen, handleReg }: IRegprops) => {
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
                  placeholder="Your Name"
                  className="input-col"
                  autoComplete="off"
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
                  type="text"
                  placeholder="Your Name"
                  className="input-col"
                  autoComplete="off"
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
                  placeholder="Your Name"
                  className="input-col"
                  autoComplete="off"
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
                  placeholder="Your Name"
                  className="input-col"
                  autoComplete="off"
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
                <TextField
                  size="small"
                  type="text"
                  placeholder="Your Name"
                  className="input-col"
                  autoComplete="off"
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
                          <CalendarMonthIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Grid>
              <Grid size={{ lg: 4 }} className="company_logo">
                <Typography variant="h6">Role</Typography>
              </Grid>
              <Grid size={{ lg: 8 }} className="company_logo">
                <TextField
                  size="small"
                  type="text"
                  placeholder="Your Name"
                  className="input-col"
                  autoComplete="off"
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
                          <PsychologyIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
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
