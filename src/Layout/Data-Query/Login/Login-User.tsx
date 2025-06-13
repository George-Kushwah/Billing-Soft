import { useMutation, UseMutationResult } from '@tanstack/react-query';
import Customaxios from '../../Axios/Axios-Interface';

const urls = Customaxios(process.env.REACT_APP_BACKADN_URL);

const loginusers = async (ev: any): Promise<void> => {
  try {
    const headers: any = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ev?.token}`,
    };
    const login = await urls
      .post('Login-User', ev?.payload, {
        headers,
      })
      .then((res: any) => res?.data);
    return login;
  } catch (err: any) {
    return Promise.reject(err);
  }
};

export const LoginUser = (): UseMutationResult<void, Error> => {
  return useMutation({
    mutationKey: ['Login'],
    mutationFn: loginusers,
  });
};
