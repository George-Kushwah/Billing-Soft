import Cookies from 'js-cookie';

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
