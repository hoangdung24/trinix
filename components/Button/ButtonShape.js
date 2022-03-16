import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Image from "next/image";

const ButtonBack = ({ position, title }) => {
  return (
    <ButtonStyled>
      <BackgroundSvg position={position}>
        <Image layout="fixed" src="/backbutton.svg" width="38px" height="32px" />
      </BackgroundSvg>
      <Title variant="title2">{title}</Title>
    </ButtonStyled>
  );
};

export default ButtonBack;

// Styled Sheet

const ButtonStyled = styled(Button)(({ theme }) => {
  return {
    position: "relative",
    whiteSpace: "nowrap",
    maxWidth: "fit-content",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  };
});

const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.black,
  };
});

const BackgroundSvg = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== "position";
  },
})(({ theme, position }) => {
  const defaultStyle = {
    position: "absolute",
  };

  if (position === "right") {
    return {
      ...defaultStyle,
      bottom: 0,
      right: "5px",
      transform: "scaleX(-1)",
    };
  } else {
    return {
      ...defaultStyle,
      bottom: 0,
      left: "5px",
    };
  }
});
