import React from 'react';
import StyledCarousel from '../StyledCarousel';
import { Container } from './styles';

const StyledMoviesList: React.FC = () => {
  return (
    <Container>
      <StyledCarousel title="Trending Now" />
      <StyledCarousel title="Top Rating" />
      <StyledCarousel title="Up Coming" />
      <StyledCarousel title="Trending Now" />
      <StyledCarousel title="Trending Now" />
    </Container>
  );
};

export default StyledMoviesList;
