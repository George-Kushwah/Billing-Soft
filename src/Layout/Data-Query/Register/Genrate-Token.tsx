import { queryOptions } from '@tanstack/react-query';
import Customaxios from '../../Axios/Axios-Interface';

const urls = Customaxios(process.env.REACT_APP_JWT_KEY);

const GenrateNewToken = async () => {
  try {
    const getToken = urls('Genrate/Token')
      .then((res: any) => res)
      .catch((err: any) => err.toJSON()?.message);
    return getToken;
  } catch (err: any) {
    return Promise.reject(err);
  }
};

export function GetToken() {
  return queryOptions({
    queryKey: ['Token'],
    queryFn: () => GenrateNewToken,
  });
}
