import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './Carousel.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import content from '../content';

function Carousel() {
  const options = {
    type: 'slide',
    width: '100vw',
    height: '100vh',
    cover: true,
    keyboard: true,
  };

  const images = content.data.photos.map(photo => (
    <SplideSlide key={photo.id}>
      <img src={photo.path} alt={photo.name} />
    </SplideSlide>
  ));

  return <Splide options={options}>{images}</Splide>;
}

export default Carousel;
