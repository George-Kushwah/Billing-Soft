import React, { useState } from 'react';
import { Decodetoken } from './../../../Custom-Elements/Buttonclick';
const Detais = () => {
  const [user, setUser] = useState<any>([]);
  const deatils = Decodetoken();
  React.useEffect(() => {
    if (Object.keys(deatils).length > 0) {
      setUser(deatils);
    } else setUser([]);
  }, []);
  console.log(user);
  return <div>details</div>;
};

export default Detais;
