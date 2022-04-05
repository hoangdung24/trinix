import { useRef } from "react";
import { useRouter } from "next/router";
import { Image } from "../../hoc";
import { GridContainer, Button } from "../../components";

import { useHoverDirty } from "react-use";
import { Box, styled } from "@mui/material";

import { useDevice } from "../../hooks";

const DURATION = "all 1s";

const HEIGHT = "500px";

const BottomLogo = ({ ...props }) => {
  const ref = useRef(null);
  const router = useRouter();
  const isHovering = useHoverDirty(ref);

  const { isTablet } = useDevice();
  const { id, thumbnail_image, invert_thumbnail_image } = props;

  if (!isTablet) {
    return (
      <Wrapper ref={ref} className="bottomLogo">
        <GridContainer
          OuterProps={{
            sx: {
              height: "100%",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "inherit",
              width: "inherit",
            }}
          >
            <ImageBackground className="imageBackground">
              {isHovering ? (
                <Image
                  className="image"
                  src={invert_thumbnail_image}
                  width="100%"
                  height={HEIGHT}
                  alt="Trinix"
                />
              ) : (
                <Image
                  className="image"
                  src={thumbnail_image}
                  width="100%"
                  height={HEIGHT}
                  alt="Trinix"
                />
              )}
            </ImageBackground>
            <ButtonWrapper className="button">
              <Button
                title="See our project"
                onClick={() => {
                  router.push(`${router.pathname}/${id}`);
                }}
              />
            </ButtonWrapper>
          </Box>
        </GridContainer>
      </Wrapper>
    );
  } else {
    return (
      <Box
        sx={{
          width: "80%",
          marginX: "auto",
          marginBottom: 10,
        }}
        onClick={() => {
          router.push(`${router.pathname}/${id}`);
        }}
      >
        <Image className="image" src={thumbnail_image} width="100%" height={200} alt="Trinix" />
      </Box>
    );
  }
};

export default BottomLogo;

// Styled Sheet
const Wrapper = styled("div")(({ theme }) => {
  return {
    position: "relative",
    transition: DURATION,
    height: HEIGHT,
    "&:hover": {
      background: theme.palette.common.black,
    },
    "&:hover .button": {
      opacity: 1,
    },
    "&:hover .imageBackground": {
      left: 0,
      transform: "translateX(0px)",
    },
  };
});

const ImageBackground = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    width: "732px",
    height: HEIGHT,
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    transition: DURATION,
  };
});

const ButtonWrapper = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    opacity: 0,
    transition: DURATION,
    top: "50%",
    right: "10%",
    transform: "translateY(-50%)",
  };
});
