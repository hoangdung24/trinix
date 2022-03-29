import { Tab as MuiTab, styled, Typography, Box } from "@mui/material";

const Tab = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CustomTab isSpecial={props.isSpecial} {...props}>
        {children}
      </CustomTab>
      <Shadow isSpecial={props.isSpecial} isActive={props.isActive} children={props.label} />
    </Box>
  );
};

export default Tab;

const CustomTab = styled(MuiTab, {
  shouldForwardProp: (prop) => {
    return prop !== "isSpecial" && prop !== "isActive" && prop !== "isLast";
  },
})(({ theme, isSpecial, isLast }) => {
  const defaultStyle = {
    textTransform: "unset",
    paddingLeft: "24px",
    paddingRight: "24px",
    color: "transparent !important",
    position: "relative",
    ...(!isLast && {
      "&:before": {
        position: "absolute",
        content: '""',
        width: "1px",
        height: "65%",
        backgroundColor: isSpecial ? theme.palette.common.white : theme.palette.common.black,
        top: "50%",
        transform: "translateY(-50%)",
        right: 0,
      },
    }),
  };

  return defaultStyle;
});

const Shadow = styled(Typography, {
  shouldForwardProp: (prop) => {
    return prop !== "isActive" && prop !== "isSpecial";
  },
})(({ theme, isActive, isSpecial }) => {
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "0.875rem",
    lineHeight: "1.25",
    fontWeight: "500",
    transform: "translate(-50%, -50%)",
    background: isActive
      ? "linear-gradient(180deg, #FC5493 0%, #8303D8 100%) !important"
      : isSpecial
      ? theme.palette.common.white
      : theme.palette.common.black,
    WebkitBackgroundClip: "text !important",
    WebkitTextFillColor: "transparent !important",
    backgroundClip: "text !important",
    pointerEvents: "none",
  };
});
