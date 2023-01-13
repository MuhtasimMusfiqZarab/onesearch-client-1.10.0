import React from 'react';
import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SlickSlider(props) {
  return <Slider {...props.settings}>{props.children}</Slider>;
}
