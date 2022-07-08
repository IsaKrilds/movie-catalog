import { Rating, Typography } from '@mui/material';
import React from 'react';
import { Container, ImageContainer, StyledTitle, StyledContentContainer } from './styles';

interface Props {
  movie: any;
}

const SimilarMoviesItem: React.FC<Props> = ({ movie }) => {
  const imageURL = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    : 'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/2496/not-found-image-15383864787lu.jpg';

  return (
    <Container>
      <ImageContainer $imageLink={imageURL} />
      <StyledContentContainer>
        <StyledTitle variant="body1">
          <b>{movie.original_title}</b>
        </StyledTitle>
        <Rating
          value={movie.vote_average / 2}
          precision={0.2}
          readOnly
          size="small"
          style={{ marginBottom: '8px' }}
        />
        <Typography variant="body2">{movie.overview}</Typography>
      </StyledContentContainer>
    </Container>
  );
};

export default SimilarMoviesItem;
