import React from 'react';
import { Carousel, Container, SectionTitle } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BannerItem from '../BannerItem';

interface Props {
  title: string;
  content: any;
}

const StyledCarousel: React.FC<Props> = ({ title, content }) => {
  return (
    <Container>
      <SectionTitle variant="h5">{title}</SectionTitle>
      <Carousel
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={18}>
        {content.results.map((item: any, index: number) => {
          return <BannerItem movie={item} key={index} />;
        })}
      </Carousel>
    </Container>
  );
};

export default StyledCarousel;
