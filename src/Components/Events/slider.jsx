import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Events.css"; // Import your custom styles

const CustomSlider = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default CustomSlider;
