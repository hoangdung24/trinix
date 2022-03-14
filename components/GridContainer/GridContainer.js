import React from "react";

import { Box } from "@mui/material";
const GridContainer = ({ OuterProps = {}, InnerProps = {}, children }) => {
  const { sx: OuterSx = {}, ...restOuterProps } = OuterProps;

  const { sx: InnerSx = {}, ...restInnerProps } = InnerProps;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        ...OuterSx,
      }}
      {...restOuterProps}
    >
      <Box
        sx={{
          width: (theme) => {
            return theme.breakpoints.values.xl * 0.9;
          },
          justifyContent: "space-betwwen",
          alignItems: "center",
          flexDirection: "row",
          ...InnerSx,
        }}
        {...restInnerProps}
      >
        {children}
      </Box>
    </Box>
  );
};

export default GridContainer;
