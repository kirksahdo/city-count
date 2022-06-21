import { AxiosError } from 'axios';

export const errorInterceptor = (error: AxiosError) => {
  if (error.response?.status === 401) {
    // Do something
  }
  return Promise.reject(error);
};
