import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Cryptojs from 'crypto-js';
import { jwtDecode } from 'jwt-decode';

const ProtectRoute = () => {
  const checkuser = () => {
    const getcookies = Cookies.get('token');
    if (getcookies !== undefined && getcookies !== '') {
      const decoded: any = jwtDecode(getcookies);
      const expireDate: any = new Date(decoded?.exp * 1000);
      if (Date.now() >= expireDate) {
        alert('session is Expired');
        return false;
      } else {
        const getlogin = Cookies.get('login');
        if (getlogin !== undefined && getlogin !== '') {
          const setcheck: any = Cryptojs.AES.decrypt(
            getlogin,
            `${process.env.REACT_APP_API_KEY}`,
          );
          const decryptedData = JSON.parse(
            setcheck.toString(Cryptojs.enc.Utf8),
          );
          if (decryptedData?.succ && !decryptedData?.error) {
            return true;
          }
        } else {
          alert('session is Expired');
          return false;
        }
      }
    } else {
      alert('session is Expired');
      return false;
    }
  };

  return checkuser() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;
