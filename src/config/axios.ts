import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org',
  withCredentials: false,
  headers: {
    'Content-Type': 'text/plain',
  },
});
