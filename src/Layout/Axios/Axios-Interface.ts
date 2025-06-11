import axois from 'axios';

const Customaxios = (path: string | undefined) => {
  const Instance = axois.create({
    timeout: 5000,
    baseURL: path,
  });
  Instance.interceptors.request.use((request: any) => {
    return request;
  });
  Instance.interceptors.response.use((response: any) => {
    return response;
  });
  return Instance;
};
export default Customaxios;
