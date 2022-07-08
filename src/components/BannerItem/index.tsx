import React, { useState } from 'react';
import StyledDialog from '../StyledDialog';
import { Container } from './styles';

interface Props {
  movie: any;
  style?: React.CSSProperties | undefined;
}

const BannerItem: React.FC<Props> = ({ movie, style }) => {
  const [open, setOpen] = useState(false);

  const imageURL = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/2496/not-found-image-15383864787lu.jpg';

  const handleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <Container $imageLink={imageURL} onClick={handleDialog} style={style} />
      <StyledDialog open={open} handleDialog={handleDialog} movieInfo={movie} />
    </>
  );
};

export default BannerItem;
