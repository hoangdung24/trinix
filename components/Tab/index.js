import { Tab as MuiTab, styled } from "@mui/material";

const Tab = ({ children, ...props }) => {
  return <CustomTab {...props}>{children}</CustomTab>;
};

export default Tab;

const CustomTab = styled(MuiTab, {
  shouldForwardProp: (prop) => {
    return prop !== "isActive";
  },
})(({ theme, isActive }) => {
  const defaultStyle = {
    textTransform: "unset",
    paddingLeft: "24px",
    paddingRight: "24px",
  };

  if (isActive) {
    return {
      ...defaultStyle,
      background: "linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      whiteSpace: "nowrap",
      textTransform: "unset",
    };
  } else {
    return {
      ...defaultStyle,
    };
  }
});
