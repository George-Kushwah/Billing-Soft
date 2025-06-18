import Cookies from 'js-cookie';
import Cryptojs from 'crypto-js';
import { jwtDecode } from 'jwt-decode';
export const ButtonDebounce = (fn: any, time: number) => {
  let times: any = null;
  return function () {
    clearTimeout(times);
    times = setTimeout(() => {
      fn();
    }, time);
  };
};

export const Cookiesget = async (func: any, err: any, errmess: any) => {
  let check: any = await func.refetch();
  if (
    check?.data !== undefined &&
    check?.data?.data !== '' &&
    check.data.status === 200
  ) {
    Cookies.remove('token');
    Cookies.set('token', `${check?.data?.data}`, {
      expires: 1,
      path: '/',
      secure: false,
      sameSite: 'Strict',
    });
  } else {
    if (check?.data?.status >= 400 || check?.data?.message) {
      err(true);
      errmess(check?.data?.message);
    }
  }
};

export const Decodetoken = () => {
  const cokieslogin = Cookies.get('login');
  if (cokieslogin !== undefined && cokieslogin !== '') {
    const setcheck: any = Cryptojs.AES.decrypt(
      cokieslogin,
      `${process.env.REACT_APP_API_KEY}`,
    );
    const decryptedData = JSON.parse(setcheck.toString(Cryptojs.enc.Utf8));
    let newData: any = { ...decryptedData };
    delete newData?.id;
    delete newData?.error;
    delete newData?.succ;
    return newData;
  } else {
    alert('Details not found');
    return {};
  }
};

export const CheckUser = () => {
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
        const decryptedData = JSON.parse(setcheck.toString(Cryptojs.enc.Utf8));
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

export const GetUserInfo = () => {
  const cokieslogin = Cookies.get('login');
  if (cokieslogin !== undefined && cokieslogin !== '') {
    const setcheck: any = Cryptojs.AES.decrypt(
      cokieslogin,
      `${process.env.REACT_APP_API_KEY}`,
    );
    const decryptedData = JSON.parse(setcheck.toString(Cryptojs.enc.Utf8));
    let newData: any = { ...decryptedData };
    delete newData?.id;
    delete newData?.error;
    delete newData?.succ;
    return newData;
  } else {
    alert('User not found');
    return {};
  }
};
