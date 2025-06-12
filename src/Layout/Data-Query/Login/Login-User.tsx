import { useMutation, UseMutationResult } from '@tanstack/react-query';
import Customaxios from '../../Axios/Axios-Interface';

const urls = Customaxios(process.env.REACT_APP_BACKADN_URL);

const registerUsers = async (ev: any): Promise<void> => {
  try {
    const headers: any = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ev.token?.data}`,
    };
    const users = await urls
      .post('Register-User', ev?.payload, {
        headers,
      })
      .then((res: any) => res);
    return users;
  } catch (err: any) {
    return Promise.reject(err);
  }
};

export const Registeruser = (): UseMutationResult<void, Error> => {
  return useMutation({
    mutationKey: ['Register'],
    mutationFn: registerUsers,
  });
};
