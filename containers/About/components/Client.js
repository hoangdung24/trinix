import { Fragment } from "react";

import { Box, Typography, styled } from "@mui/material";

import { GridContainer } from "../../../components";

import ClientListSlider from "./ClientListSlider";

import { useDevice } from "../../../hooks";

const Client = ({ data }) => {
  const { isMobile, isTablet, isMediumDesktop, isDesktop } = useDevice();

  return (
    <Fragment>
      {isMobile && <LineHeight />}

      <TitleWrapper isMobile={isMobile}>
        <Typography
          variant="h2"
          sx={{
            marginX: "auto",
            width: "fit-content",
            background: (theme) => {
              return theme.palette.common.white;
            },
            padding: (theme) => {
              if (isMobile) {
                return theme.spacing(2, 2);
              } else {
                return theme.spacing(2, 15);
              }
            },
          }}
        >
          Our Clients
        </Typography>
      </TitleWrapper>

      <GridContainer>
        <Box
          sx={[
            {
              marginY: 8,
            },
            isMobile && {
              marginTop: 4,
            },
          ]}
        >
          <ClientListSlider
            {...{
              data,
              isMediumDesktop,
              isMobile,
              isTablet,
              isDesktop,
            }}
          />
        </Box>
      </GridContainer>
    </Fragment>
  );
};

export default Client;

const TitleWrapper = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== "isMobile";
  },
})(({ theme, isMobile }) => {
  if (isMobile) {
    return {};
  } else {
    return {
      position: "relative",
      ":before": {
        content: '""',
        position: "absolute",
        backgroundColor: theme.palette.common.black,
        height: "4px",
        width: "100%",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        zIndex: -1,
      },
    };
  }
});

const LineHeight = styled(Box)(({ theme }) => {
  return {
    height: "2px",
    width: "60%",
    margin: "0 auto 36px",
    backgroundColor: theme.palette.common.black,
  };
});
