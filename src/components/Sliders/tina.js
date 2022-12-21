import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/sliders.css"

function CarouselTina() {

  return (
    <>
      <div className='carouselProjects'>
        <div className='projectsTitle'>
          <h3>Tina</h3>
        </div>
        <Carousel variant='dark'>
          <Carousel.Item>
            <img src='/assets/img/sliders/TINA1.webp' alt="slide-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/TINA2.webp' alt="slide-2"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/TINA3.webp' alt="slide-3"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/TINA4.webp' alt="slide-4"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/TINA5.webp' alt="slide-5"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/sliders/TINA6.webp' alt="slide-6"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselTina;