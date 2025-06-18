import React from 'react';
import { GetUserInfo } from './../../Custom-Elements/Buttonclick';

const Dashboard = () => {
  const [user, setUser] = React.useState<any>({});
  const deatils = GetUserInfo();

  React.useEffect(() => {
    if (Object.keys(deatils).length > 0) {
      setUser(deatils);
    } else setUser([]);
  }, []);

  return <>Welcome {user?.name}</>;
};

export default Dashboard;
