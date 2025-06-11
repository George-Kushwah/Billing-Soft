import {
  queryOptions,
  useMutation,
  UseMutationResult,
} from '@tanstack/react-query';
import Customaxios from '../../Axios/Axios-Interface';

const urls = Customaxios(process.env.REACT_APP_BACKADN_URL);

const GenrateNewToken = async (): Promise<void> => {
  try {
    const getToken = await urls
      .get('Genrate/Token')
      .then((res: any) => res)
      .catch((err: any) => err.toJSON()?.message);
    return getToken;
  } catch (err: any) {
    return Promise.reject(err);
  }
};

const registerUsers = async (ev: any): Promise<void> => {
  const headers: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ev.token?.data}`,
  };
  const users = await urls
    .post('Register-User', ev?.payload, {
      headers,
    })
    .then((res: any) => res)
    .catch((err: any) => err.toJSON()?.message);
  return users;
};

export function GetToken() {
  return queryOptions({
    queryKey: ['Token'],
    queryFn: GenrateNewToken,
    enabled: false,
  });
}

export const Registeruser = (): UseMutationResult<void, Error> => {
  return useMutation({
    mutationKey: ['Register'],
    mutationFn: registerUsers,
  });
};
