import { Typography as MuiTypography, styled } from "@mui/material";

const Headline = ({ children, ...props }) => {
  console.log(children);

  return <Typography {...props}>{children}</Typography>;
};

export default Headline;

const Typography = styled(MuiTypography)(({ theme }) => {
  return {
    background: "linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    whiteSpace: "nowrap",
  };
});
