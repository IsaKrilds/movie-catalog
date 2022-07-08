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

  const getCredits = async (id: number) => {
    try {
      const response = await axios.get(
        `/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
      );
      return response.data;
    } catch (err: any) {
      console.log(err as AxiosError);
      throw new Error(err) as AxiosError;
    }
  };

  const getAllGenres = async () => {
    try {
      const response = await axios.get(
        `/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
      );
      return response.data.genres;
    } catch (err: any) {
      console.log(err as AxiosError);
      throw new Error(err) as AxiosError;
    }
  };

  const SearchedMovies = async (query: string) => {
    try {
      const response = await axios.get(
        `/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&${query}`
      );
      return response.data;
    } catch (err: any) {
      console.log(err as AxiosError);
      throw new Error(err) as AxiosError;
    }
  };

  const getRelatedMovies = async (id: number) => {
    try {
      const response = await axios.get(
        `/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&page=1`
      );
      return response.data;
    } catch (err: any) {
      console.log(err as AxiosError);
      throw new Error(err) as AxiosError;
    }
  };

  const getMovies = async (genre_id?: number) => {
    const handleGenreFilter = genre_id ? `&with_genres=${genre_id}` : '';

    try {
      const response = await axios.get(
        `/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1${handleGenreFilter}`
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
    getCredits,
    getAllGenres,
    getRelatedMovies,
    SearchedMovies,
    getMovies,
  };
};
