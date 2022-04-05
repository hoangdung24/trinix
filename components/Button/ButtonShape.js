import { useRef } from "react";
import { useHoverDirty } from "react-use";

import { styled, Button, Typography, Box } from "@mui/material";

import { useDevice } from "../../hooks";

import { Image } from "../../hoc";

const ButtonShape = ({
  position,
  title,
  TitleProps,
  alwaysVisible = false,
  useSolid = false,
  ...props
}) => {
  const ref = useRef(null);
  const { isTablet } = useDevice();
  const isHovering = useHoverDirty(ref);

  return (
    <ButtonStyled ref={ref} isTablet={isTablet} {...props}>
      {!isTablet && (
        <BackgroundSvg position={position} isHovering={isHovering || alwaysVisible}>
          <Image
            layout="fixed"
            src={useSolid ? "/solid-triangle-shape.svg" : "/gradient-triangle-shape.svg"}
            width="38px"
            height="32px"
            alt="Trinix"
            placeholder="empty"
          />
        </BackgroundSvg>
      )}

      {alwaysVisible && (
        <BackgroundSvg position={position} isHovering={alwaysVisible}>
          <Image
            layout="fixed"
            src={useSolid ? "/solid-triangle-shape.svg" : "/gradient-triangle-shape.svg"}
            width="38px"
            height="32px"
            alt="Trinix"
            placeholder="empty"
          />
        </BackgroundSvg>
      )}

      <Title
        variant={isTablet ? "category" : "title2"}
        sx={[
          isTablet && {
            textTransform: "uppercase",
          },
        ]}
        {...TitleProps}
      >
        {title}
      </Title>
    </ButtonStyled>
  );
};

export default ButtonShape;

// Styled Sheet

const ButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => {
    return prop !== "isTablet";
  },
})(({ theme, isTablet }) => {
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
    ...(isTablet && {
      justifyContent: "flex-start",
    }),
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
