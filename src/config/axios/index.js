import axios from 'axios';

export const CustomAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Credentials': 'true',
  },
});
