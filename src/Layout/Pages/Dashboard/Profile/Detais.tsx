import React, { useState } from 'react';
import { Decodetoken } from './../../../Custom-Elements/Buttonclick';
import { Box, Grid } from '@mui/material';
const Detais = () => {
  const [user, setUser] = useState<any>({});
  const deatils = Decodetoken();
  React.useEffect(() => {
    if (Object.keys(deatils).length > 0) {
      setUser(deatils);
    } else setUser([]);
  }, []);
  return (
    <>
      <Box className="profile">
        {user && Object.keys(user).length > 0 ? (
          <>
            <Grid container spacing={2}>
              <Grid size={{ lg: 2 }} className="company_logo">
                Name
              </Grid>
              <Grid size={{ lg: 10 }} className="company_logo">
                {user?.name}
              </Grid>
              <Grid size={{ lg: 2 }} className="company_logo">
                Role
              </Grid>
              <Grid size={{ lg: 10 }} className="company_logo">
                {user?.role}
              </Grid>
              <Grid size={{ lg: 2 }} className="company_logo">
                Mobile
              </Grid>
              <Grid size={{ lg: 10 }} className="company_logo">
                {user?.mobile}
              </Grid>
              <Grid size={{ lg: 2 }} className="company_logo">
                DOB
              </Grid>
              <Grid size={{ lg: 10 }} className="company_logo">
                {user?.dob}
              </Grid>
            </Grid>
          </>
        ) : (
          <p>No Details Found</p>
        )}
      </Box>
    </>
  );
};

export default Detais;
