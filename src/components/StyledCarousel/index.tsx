import React from 'react';
import { CarouselItem, Carousel, Container, SectionTitle } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
  title: string;
}

const StyledCarousel: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <SectionTitle variant="h5">{title}</SectionTitle>
      <Carousel
        selectedItem={1}
        infiniteLoop
        emulateTouch
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={100 / 5}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Container>
  );
};

export default StyledCarousel;
