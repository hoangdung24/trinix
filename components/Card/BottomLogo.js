import { useRef } from "react";
import { useRouter } from "next/router";
import { Image } from "../../hoc";
import { GridContainer, Button } from "../../components";

import { useHoverDirty } from "react-use";
import { Box, styled } from "@mui/material";

const DURATION = "all 1s";

// const LOGO1 = "/bottomlogo1.svg";
// const LOGO2 = "/bottomlogo.svg";

const HEIGHT = "500px";

const BottomLogo = ({ ...props }) => {
  const ref = useRef(null);
  const router = useRouter();
  const isHovering = useHoverDirty(ref);

  const { id, banner } = props;

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
              <Image className="image" src={banner} width="100%" height={HEIGHT} alt="Trinix" />
            ) : (
              <Image className="image" src={banner} width="100%" height={HEIGHT} alt="Trinix" />
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
