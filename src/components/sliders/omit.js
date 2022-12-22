import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/sliders.css"

function CarouselOmit() {

  return (
    <>
      <div className='carouselProjects'>
        <div className='projectsTitle'>
          <h3>Omit</h3>
        </div>
        <Carousel>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/omit/Artboard 1 (1).webp' alt="slide-1"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/omit/Artboard 2 (1).webp' alt="slide-2"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/omit/Artboard 3 (1).webp' alt="slide-3"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/omit/Artboard 4 (1).webp' alt="slide-4"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src='/assets/img/portfolio/projects/omit/Artboard 5 (1).webp' alt="slide-5"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselOmit;