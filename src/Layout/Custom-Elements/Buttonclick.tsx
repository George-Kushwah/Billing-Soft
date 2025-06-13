import Cookies from 'js-cookie';
import Cryptojs from 'crypto-js';
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
    return decryptedData;
  } else {
    alert('Details not found');
    return {};
  }
};
