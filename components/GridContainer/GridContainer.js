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
          return {
            xs: 0.9,
            xl: theme.breakpoints.values.xl * 0.9,
          };
        },
        paddingX: (theme) => {
          return {
            xs: theme.spacing(2),
            xl: theme.spacing(0),
          };
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
