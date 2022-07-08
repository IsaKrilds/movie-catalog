import React from 'react';
import BannerItem from '../BannerItem';
import { Container } from './styles';

interface Props {
  movies: any;
}

const BannersList: React.FC<Props> = ({ movies }) => {
  return (
    <Container>
      {movies.results.map((item: any, index: number) => (
        <BannerItem key={index} movie={item} style={{ margin: '30px 50px' }} />
      ))}
    </Container>
  );
};

export default BannersList;
