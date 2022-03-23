import Slider from "react-slick";
import React, { Component } from "react";
import { Box } from "@mui/material";
import { Image } from "../../../hoc";

export default class SimpleSlider extends Component {
  render() {
    const data = this.props?.data || [];
    const { isMediumDesktop } = this.props;

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: isMediumDesktop ? 6 : 4,
      slidesToScroll: 3,
    };
    return (
      <Slider {...settings}>
        {data.map((el, index) => {
          const { image } = el.value;

          return (
            <Box key={index}>
              <Image src={image} width={150} height={150} objectFit="cover" />
            </Box>
          );
        })}
      </Slider>
    );
  }
}
