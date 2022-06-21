import axios from 'axios';

export const CustomAxios = axios.create({
  baseURL: 'http://localhost:4000/v1',
  // baseURL: 'https://node-app-tau.vercel.app/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
