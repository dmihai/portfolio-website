import React, { useEffect, useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Carousel.css';
import content from '../content';

function Carousel() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  console.log((dimensions.width / dimensions.height) * 100);
  return (
    <CarouselProvider
      naturalSlideWidth={dimensions.width}
      naturalSlideHeight={dimensions.height}
      totalSlides={3}
      //isIntrinsicHeight={true}
    >
      <Slider classNameAnimation="animation--fade">
        <Slide index={0} classNameHidden="hidden" classNameVisible="visible">
          <Image
            src="img/DSC_09429.jpg"
            hasMasterSpinner={false}
            className="image--with-cover"
          />
        </Slide>
        <Slide index={1} classNameHidden="hidden" classNameVisible="visible">
          <Image
            src="img/DSC_09917.jpg"
            hasMasterSpinner={false}
            className="image--with-cover"
          />
        </Slide>
        <Slide index={2} classNameHidden="hidden" classNameVisible="visible">
          <Image
            src="img/DSC_09959.jpg"
            hasMasterSpinner
            className="image--with-cover"
          />
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}

export default Carousel;
