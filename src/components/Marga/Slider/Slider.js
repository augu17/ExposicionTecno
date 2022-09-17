import React from "react";
import Carousel from "better-react-carousel";
import "./Slider.css";

const CarouselContainer = () => {
  return (
    <div className="carousel-container">
      <Carousel cols={1} rows={1} gap={10} loop scrollSnap>
        <Carousel.Item>
          <div className="carousel-image">
            <img src="https://picsum.photos/800/600?random=1" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image">
            <img src="https://picsum.photos/800/600?random=2" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image">
            <img src="https://picsum.photos/800/600?random=3" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          {/* anything you want to show in the grid */}
        </Carousel.Item>
        {/* ... */}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
