import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import BannersList from '../../components/BannersList';
import StyledHeader from '../../components/StyledHeader';
import { Container } from './styles';
import queryString from 'query-string';
import { useMovies } from '../../hooks/useMovies';

const SearchMovies: React.FC = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  const { SearchedMovies } = useMovies();

  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const query = params.get('query');

  useEffect(() => {
    const queryStringify = queryString.stringify({ query: query });

    const handleRequest = async () => {
      try {
        const searchedMovies = await SearchedMovies(queryStringify);
        setMovies(searchedMovies);

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
      <StyledHeader />
      <BannersList movies={movies} />
    </Container>
  );
};

export default SearchMovies;
