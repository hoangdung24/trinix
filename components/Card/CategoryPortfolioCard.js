import { Box, Typography, styled } from "@mui/material";

import { GridContainer, Button } from "../../components";

import { Image } from "../../hoc";

const DURATION = "all 1s";

const PADDING_LEFT = 40;

const CategoryPortfolioCard = ({ id, title, subTitle, imageSrc, width, height = 450 }) => {
  if (width === undefined) {
    width = height;
  }

  return (
    <Wrapper height={height}>
      <GridContainer
        OuterProps={{
          sx: {
            height: "100%",
          },
        }}
        InnerProps={{
          sx: {
            paddingX: 4,
          },
        }}
      >
        <Box
          className="leftSide"
          sx={{
            position: "relative",
            width: "35%",
            transition: DURATION,
          }}
        >
          <BackgroundSvg className="backgroundsvg">
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Number variant="h2">{id}</Number>
              <Box
                sx={{
                  position: "absolute",
                  left: "-30px",
                  bottom: "-5px",
                }}
              >
                <Image layout="fixed" src="/backbutton.svg" width="67px" height="58px" />
              </Box>
            </Box>
          </BackgroundSvg>
          <Box
            sx={{
              position: "relative",
              width: "fit-content",
            }}
          >
            <Title className="title" variant="h2">
              {title}
            </Title>
            <Box
              className="subTitle"
              sx={{
                position: "relative",
                textAlign: "right",
                transition: DURATION,
                transform: "translateX(0)",
              }}
            >
              <SubTitle variant="bodyText">{subTitle}</SubTitle>
            </Box>
          </Box>
        </Box>
      </GridContainer>

      <SeeMoreButton className="seeMore">
        <Button title="See our projects" isBackground={true} />
      </SeeMoreButton>

      <Box
        sx={{
          position: "absolute",
          width,
          height,
          top: 0,
          right: 0,
          transform: `translateX(${height * 1.7}px)`,
          transition: DURATION,
        }}
        className="rightSide"
      >
        <ImageWrapper>
          <Image src={imageSrc} width={height} height={height} />
        </ImageWrapper>

        <Shape width={width} height={height} />
      </Box>
    </Wrapper>
  );
};

export default CategoryPortfolioCard;

// Styled Sheet

const Wrapper = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== "height";
  },
})(({ theme, height }) => {
  const sharedStyle = {
    transform: "translateX(100px)",
  };

  return {
    position: "relative",
    overflow: "hidden",
    height: `${height}px`,
    backgroundColor: "transparent",
    transition: DURATION,

    "&:hover": {
      backgroundColor: "rgba(1, 16, 33, 0.1)",
      "& .leftSide": {
        ...sharedStyle,
      },
      "& .seeMore": {
        transform: "translate(80px, -50%)",
      },
      "& .rightSide": {
        transform: `translateX(${height * 0.5}px)`,
      },
    },
  };
});

const BackgroundSvg = styled("div")(({ theme }) => {
  return {
    transform: "translateX(0px)",
    paddingLeft: PADDING_LEFT,
    transition: DURATION,
  };
});

const Number = styled(Typography)(({ theme }) => {
  return {};
});

const SeeMoreButton = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "50%",
    right: "25%",
    transform: "translateY(-50%)",
    transition: DURATION,
    zIndex: 3,
  };
});

const Title = styled(Typography)(({ theme }) => {
  return {
    background: "linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    whiteSpace: "nowrap",
    transition: DURATION,
    paddingLeft: PADDING_LEFT * 2,
  };
});

const SubTitle = styled(Typography)(({ theme }) => {
  return {
    "&:before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "-150%",
      width: "150%",
      height: "2px",
      backgroundColor: theme.palette.common.black,
      transform: "translateY(-50%)",
      transition: DURATION,
    },
  };
});

const ImageWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: 0,
    left: "-65%",
    zIndex: 3,
  };
});

const Shape = styled(Box)(({ theme, height }) => {
  return {
    position: "absolute",
    width: height,
    height: height,
    zIndex: 2,
    transition: DURATION,
    top: 0,
    backgroundColor: theme.palette.common.black,
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
  };
});
