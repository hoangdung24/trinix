import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useDevice } from "../../hooks";

const TRANSITION = "all 0.5s";

const ButtonSeeOurProject = ({
  title,
  isBackground = false,
  isIcon = true,
  isUnderline = true,
  IconProps = {},
  ...props
}) => {
  const { isMobile } = useDevice();

  return (
    <ButtonStyled isBackground={isBackground} isIcon={isIcon} isMobile {...props}>
      <Title className="text" variant={isMobile ? "categoryBold" : "title2"}>
        {title}
        {isUnderline && <Underline className="underline" />}
      </Title>
      {isIcon && <Icon {...IconProps} />}
    </ButtonStyled>
  );
};

export default ButtonSeeOurProject;

const ButtonStyled = styled(Button, {
  shouldForwardProp: (prop) => {
    return prop !== "isBackground" && prop !== "isIcon" && prop !== "isMobile";
  },
})(({ theme, isBackground, isIcon, isMobile }) => {
  const blackColor = theme.palette.common.black;
  const borderWidth = "2px";

  let defaultStyle = {
    textTransform: "unset",
    whiteSpace: "nowrap",
    maxWidth: "fit-content",
    // paddingLeft: theme.spacing(1.5),
    // paddingRight: isIcon ? theme.spacing(4) : theme.spacing(1.5),
    // paddingTop: theme.spacing(1.125),
    // paddingBottom: theme.spacing(1.125),
    padding: isMobile
      ? theme.spacing(0.5, isIcon ? 2 : 1.125, 0.5, 1.125)
      : theme.spacing(1.125, isIcon ? 4 : 1.5, 1.125, 1.125),
    position: "relative",
    transition: TRANSITION,
    "&:hover": {
      background: "transparent",
      boxShadow: "none",
    },
    "&:active": {
      opacity: 0.75,
      boxShadow: "none",
    },
    "&:hover .underline": {
      opacity: 1,
    },
  };

  if (isBackground) {
    return {
      ...defaultStyle,
      background: blackColor,
      borderRadius: "10px",
      boxSizing: "border-box",
      backgroundClip: "padding-box",
      border: `solid ${borderWidth} transparent`,
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
        zIndex: -1,
        margin: `-${borderWidth}`,
        borderRadius: "inherit",
      },
    };
  } else {
    return {
      ...defaultStyle,
      position: "relative",
    };
  }
});

const Title = styled(Typography)(({ theme }) => {
  return {
    position: "relative",
    color: theme.palette.common.white,
    transition: TRANSITION,
  };
});

const Icon = styled(ArrowForwardIcon)(({ theme }) => {
  return {
    color: theme.palette.common.white,
    fontSize: theme.typography.htmlFontSize * 2,
    paddingLeft: theme.spacing(1),
  };
});

const Underline = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    width: "100%",
    height: theme.spacing(0.1875),
    backgroundColor: theme.palette.common.white,
    opacity: 0,
    transition: TRANSITION,
    bottom: theme.spacing(-0.5),
    zIndex: 1,
  };
});
