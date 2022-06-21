import axios from 'axios';
import { Enviroment } from '../../../environment';

import { errorInterceptor, responseInterceptor } from './interceptors';

const api = axios.create({
  baseURL: Enviroment.URL_BASE,
});

api.interceptors.response.use(
  response => responseInterceptor(response),
  error => errorInterceptor(error),
);

export { api };
