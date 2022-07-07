import React from 'react';
import { Container } from './styles';

interface Props {
  movie: any;
}

const CarouselItem: React.FC<Props> = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return <Container $imageLink={imageURL} />;
};

export default CarouselItem;
