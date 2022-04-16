import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../../../assets/css/golobal.css';
import Slide from "../Slide/Slide";

const Banner = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
      fetch('slide.json')
          .then(res => res.json())
          .then(data => setSlides(data))
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
        <Slider {...settings}>
        {
              slides.map(slide => <Slide
              key={slide.id}
              slide={slide}
              />)
            }
        </Slider>
      </div>
  );
};

export default Banner;