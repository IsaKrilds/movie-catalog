import { AxiosError } from 'axios';
import axios from '../config/axios';

export const useMovies = () => {
  const getWeekTrending = async () => {
    try {
      const response = await axios.get(
        `/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
      );
      return response.data;
    } catch (err: any) {
      console.log(err as AxiosError);
      throw new Error(err) as AxiosError;
    }
  };

  const getTodayTrending = async () => {
    try {
      const response = await axios.get(
        `/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
      );
      return response.data;
    } catch (err: any) {
      console.log(err as AxiosError);
      throw new Error(err) as AxiosError;
    }
  };

  const getTopRated = async () => {
    try {
      const response = await axios.get(
        `/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
      );
      return response.data;
    } catch (err: any) {
      console.log(err as AxiosError);
      throw new Error(err) as AxiosError;
    }
  };

  const getUpComing = async () => {
    try {
      const response = await axios.get(
        `/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
      );
      return response.data;
    } catch (err: any) {
      console.log(err as AxiosError);
      throw new Error(err) as AxiosError;
    }
  };

  return {
    getWeekTrending,
    getTodayTrending,
    getTopRated,
    getUpComing,
  };
};
