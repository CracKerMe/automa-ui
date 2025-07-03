import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios';

const service = axios.create();

// Request interceptors
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // do something
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// Response interceptors
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
    return response.data;
  },
  (error: AxiosError) => {
    // do something
    return Promise.reject(error);
  },
);

export default service;
