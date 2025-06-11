import { queryOptions, useMutation } from '@tanstack/react-query';
import Customaxios from '../../Axios/Axios-Interface';

const urls = Customaxios(process.env.REACT_APP_BACKADN_URL);

const GenrateNewToken = async () => {
  try {
    const getToken = urls
      .get('Genrate/Token')
      .then((res: any) => res)
      .catch((err: any) => err.toJSON()?.message);
    return getToken;
  } catch (err: any) {
    return Promise.reject(err);
  }
};

const registerUsers = async (ev: any) => {
  console.log(ev);
};

export function GetToken() {
  return queryOptions({
    queryKey: ['Token'],
    queryFn: GenrateNewToken,
    enabled: false,
  });
}

export function Registeruser(data: any) {
  return useMutation({
    mutationKey: ['Register'],
    mutationFn: () => registerUsers(data),
  });
}
