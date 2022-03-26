import Slider from "react-slick";
import React, { Component } from "react";
import { Box } from "@mui/material";
import { Image } from "../../../hoc";

export default class SimpleSlider extends Component {
  render() {
    const data = this.props?.data || [];
    const { isMobile, isTablet, isDesktop, isMediumDesktop } = this.props;

    let slidesToShow = 4;

    if (isMobile) {
      slidesToShow = 3;
    } else if (isTablet) {
      slidesToShow = 3;
    } else if (isMediumDesktop) {
      slidesToShow = 6;
    } else {
      slidesToShow = 5;
    }

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 3,
    };
    return (
      <Slider {...settings}>
        {data.map((el, index) => {
          const { image } = el.value;

          return (
            <Box key={index}>
              <Image
                src={image}
                width={isMobile ? 80 : 150}
                height={isMobile ? 80 : 150}
                objectFit="cover"
                WrapperProps={{
                  marginX: "auto",
                }}
              />
            </Box>
          );
        })}
      </Slider>
    );
  }
}
