import React from "react";
import { Image } from "../../hoc";
import { Stack, Typography } from "@mui/material";

import { GridContainer } from "../../components";

const SIZE = 20;
const Footer = () => {
  return (
    <GridContainer
      OuterProps={{
        sx: {
          backgroundColor: (theme) => {
            return theme.palette.common.black;
          },
        },
      }}
    >
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
          Let's work together
        </Typography>
        <Stack direction={"row"} alignItems={"center"} spacing={1.5} position="relative">
          <Image src="/linkedin.svg" height={SIZE} width={SIZE} />

          <Image src="/instagram.svg" height={SIZE} width={SIZE} />

          <Image src="/facebook.svg" height={SIZE} width={SIZE} />

          <Image src="/vimeo.svg" height={SIZE} width={SIZE} />

          <Image src="/youtube.svg" height={SIZE} width={SIZE} />

          <Image src="/tiktok.svg" height={SIZE} width={SIZE} />
        </Stack>
      </Stack>
    </GridContainer>
  );
};

export default Footer;
