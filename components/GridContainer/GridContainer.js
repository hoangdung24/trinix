import { Box } from "@mui/material";
const GridContainer = ({ OuterProps = {}, children }) => {
  const { sx: OuterSx = {}, ...restOuterProps } = OuterProps;

  return (
    <Box
      className="container"
      sx={{
        width: "100%",
        marginX: "auto",
        maxWidth: (theme) => {
          return theme.breakpoints.values.xl * 0.9;
        },
        ...OuterSx,
      }}
      {...restOuterProps}
    >
      {children}
    </Box>
  );
};

export default GridContainer;
