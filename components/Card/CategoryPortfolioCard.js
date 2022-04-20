import { useRouter } from "next/router";

import { Box, Typography, styled, Stack } from "@mui/material";

import { GridContainer, Button, Headline } from "../../components";

import { Image } from "../../hoc";

import { useDevice } from "../../hooks";

const DURATION = "all 1s";

const PADDING_LEFT = 40;

const CategoryPortfolioCard = ({
  id,
  title,
  subtitle,
  thumbnail_image,
  width,
  counter,
  height = 450,
}) => {
  const { isTablet } = useDevice();

  if (width === undefined) {
    width = height;
  }
  const router = useRouter();

  if (!isTablet) {
    return (
      <Wrapper height={height}>
        <GridContainer>
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
                <Number variant="h2">{counter}.</Number>
                <Box
                  sx={{
                    position: "absolute",
                    left: "-10px",
                    bottom: "-5px",
                    transform: "scaleX(-1)",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Image
                      layout="fixed"
                      src="/solid-triangle-shape.svg"
                      width="67px"
                      height="58px"
                      alt=""
                    />
                  </Box>
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
                <SubTitle variant="bodyText">{subtitle}</SubTitle>
              </Box>
            </Box>
          </Box>
        </GridContainer>

        <SeeMoreButton className="seeMore">
          <Button
            onClick={() => {
              router.push(`${router.pathname}/${id}`);
            }}
            title="See our projects"
            isBackground={true}
          />
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
            <Image src={thumbnail_image} width={height} height={height} alt="" />
          </ImageWrapper>

          <Shape width={width} height={height} />
        </Box>
      </Wrapper>
    );
  } else {
    return (
      <Stack
        sx={{
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "fit-content",
            marginBottom: 2,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          >
            <Image src={"/solid-triangle-shape.svg"} width="35px" height="30px" />
          </Box>
          <Headline
            variant="title1"
            onClick={() => {
              router.push(`${router.pathname}/${id}`);
            }}
            sx={{
              fontWeight: 700,
              paddingX: 4.5,
              paddingY: 1.5,
            }}
          >
            {title}
          </Headline>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "scaleX(-1)",
            }}
          >
            <Image src={"/solid-triangle-shape.svg"} width="35px" height="30px" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 500,
              width: "50%",
              textAlign: "center",
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Stack>
    );
  }
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

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
      left: "-200%",
      width: "200%",
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
