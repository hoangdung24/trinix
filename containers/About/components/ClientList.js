import React, { Component } from "react";
import Slider from "react-slick";

import { Box } from "@mui/material";

import { Image } from "../../../hoc";

const SLIDE_TO_SHOW = 7;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: SLIDE_TO_SHOW,
      slidesToScroll: Math.floor(SLIDE_TO_SHOW / 2),
    };
    return (
      <Slider {...settings}>
        {[...new Array(10)].map((el, index) => {
          return (
            <Box key={index}>
              <Image src={"/background2.png"} width={150} height={150} objectFit="cover" />
            </Box>
          );
        })}
      </Slider>
    );
  }
}
