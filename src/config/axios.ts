import axios from 'axios';

export default axios.create({
  baseURL: `${process.env.API_URL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const axiosMK = axios.create({
  baseURL: `${process.env.API_URL_MK}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
