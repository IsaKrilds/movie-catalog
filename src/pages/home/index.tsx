import React from 'react';
import StyledHeader from '../../components/StyledHeader';
import StyledMoviesList from '../../components/StyledMoviesList';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container data-testid="container">
      <StyledHeader />
      <StyledMoviesList />
    </Container>
  );
};

export default Home;
