import React, { useState } from 'react';
import StyledDialog from '../StyledDialog';
import { Container } from './styles';

interface Props {
  movie: any;
}

const CarouselItem: React.FC<Props> = ({ movie }) => {
  const [open, setOpen] = useState(false);

  const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const handleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <Container $imageLink={imageURL} onClick={handleDialog} />
      <StyledDialog open={open} handleDialog={handleDialog} movieInfo={movie} />
    </>
  );
};

export default CarouselItem;
