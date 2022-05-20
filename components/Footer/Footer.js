import React from "react";
import { Stack, Typography, Box } from "@mui/material";

import { GridContainer, Social, Headline } from "../../components";

import { Link } from "../../hoc";

import PowerBy from "./PowerBy";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => {
          return theme.palette.common.black;
        },
        width: "100%",
      }}
    >
      <GridContainer>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          sx={{
            paddingY: 3,
            width: "inherit",
          }}
        >
          <Typography color="common.white" variant="title2">
            {"Let's work together"}
          </Typography>

          <PowerBy />

          <Social />
        </Stack>
      </GridContainer>
    </Box>
  );
};

export default Footer;
