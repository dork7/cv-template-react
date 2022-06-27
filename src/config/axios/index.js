import axios from 'axios';
import { apiUrl } from '../api';

export const CustomAxios = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
