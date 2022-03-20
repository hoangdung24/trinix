import { useRef } from "react";

import { styled, Button, Typography, Box } from "@mui/material";
import { useHoverDirty } from "react-use";

import { Image } from "../../hoc";

const ButtonBack = ({ position, title, ...props }) => {
  const ref = useRef(null);

  const isHovering = useHoverDirty(ref);

  return (
    <ButtonStyled ref={ref} {...props}>
      <BackgroundSvg position={position} isHovering={isHovering}>
        <Image
          layout="fixed"
          src="/gradient-triangle-shape.svg"
          width="38px"
          height="32px"
          alt="Trinix"
          placeholder="empty"
        />
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
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    "&:hover": {
      backgroundColor: "unset",
    },
  };
});

const Title = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.white,
  };
});

const BackgroundSvg = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== "position" && prop !== "isHovering";
  },
})(({ theme, position, isHovering }) => {
  const defaultStyle = {
    position: "absolute",
    opacity: isHovering ? 1 : 0,
    transition: `all ${theme.transitions.duration.standard}ms`,
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
      left: 0,
    };
  }
});
