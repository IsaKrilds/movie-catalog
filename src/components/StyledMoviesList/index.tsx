import React, { useEffect, useState } from 'react';
import { useMovies } from '../../hooks/useMovies';
import StyledCarousel from '../StyledCarousel';
import { Container } from './styles';

const StyledMoviesList: React.FC = () => {
  const { getWeekTrending, getTodayTrending, getTopRated, getUpComing } = useMovies();

  const [trendingWeek, setTrendingWeek] = useState() as any;
  const [trendingToday, setTrendingToday] = useState() as any;
  const [topRated, setTopRated] = useState() as any;
  const [upComing, setUpComing] = useState() as any;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleRequest = async () => {
      try {
        const trendingWeekMovies = await getWeekTrending();
        const trendingTodayMovies = await getTodayTrending();
        const topRatedMovies = await getTopRated();
        const upComingMovies = await getUpComing();

        setTrendingWeek(trendingWeekMovies);
        setTrendingToday(trendingTodayMovies);
        setTopRated(topRatedMovies);
        setUpComing(upComingMovies);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    handleRequest();
  }, []);

  if (loading) {
    return null;
  }
  return (
    <Container>
      <StyledCarousel title="Trending Now" content={trendingToday} />
      <StyledCarousel title="Trending this week" content={trendingWeek} />
      <StyledCarousel title="Top Rating" content={topRated} />
      <StyledCarousel title="Up Coming" content={upComing} />
    </Container>
  );
};

export default StyledMoviesList;
