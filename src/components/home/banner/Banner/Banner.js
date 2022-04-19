import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../../../assets/css/golobal.css';
import Slide from "../Slide/Slide";
import { Box } from "@mui/material";

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
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 4000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 4000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 4000,
        }
      }
    ]
  };
  return (
    <Box className="bannerMainArea">
      <Slider {...settings}>
        {
              slides.map(slide => <Slide
              key={slide.id}
              slide={slide}
              />)
            }
        </Slider>
    </Box>
  );
};

export default Banner;