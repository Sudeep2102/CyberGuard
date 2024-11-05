import React from 'react';
import Slider from 'react-slick';
import '../styles/scroller.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/scroll1.png';
import image2 from '../assets/scroll2.png';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 // Adjust autoplay speed as needed
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="slider-item">
          <img src={image1} className="slider-image" alt="Slide 1" />
        </div>
        <div className="slider-item">
          <img src={image2} className="slider-image" alt="Slide 2" />
        </div>
      </Slider>
      <div className="slider-rectangle">
        <p className="slider-text">Contribute to community safety by reporting instances of fraud, scams, and unethical business practices</p>
      </div>
    </div>
  );
};

export default ImageSlider;
