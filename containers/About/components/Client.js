import { Box, Typography, styled, Grid } from "@mui/material";

import { GridContainer } from "../../../components";

import ClientListSlider from "./ClientListSlider";

import { useDevice } from "../../../hooks";
import { Image } from "../../../hoc";

const Client = ({ data }) => {
  const { isMobile, isTablet, isMediumDesktop, isDesktop } = useDevice();

  return (
    <Box>
      <TitleWrapper>
        <Typography
          variant="h2"
          sx={{
            marginX: "auto",
            width: "fit-content",
            background: (theme) => {
              return theme.palette.common.white;
            },
            padding: (theme) => {
              return theme.spacing(2, 15);
            },
          }}
        >
          Our Clients
        </Typography>
      </TitleWrapper>

      <GridContainer>
        <Box marginY={8}>
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

        {/* {isDesktop ? (
          <Box marginY={8}>
            <ClientListSlider
              {...{
                data,
                isMediumDesktop,
              }}
            />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {data.map((el, idx) => {
              const { image } = el.value;

              return (
                <Grid item xs={6} sm={4} key={idx}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={image} width={150} height={150} objectFit="cover" />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )} */}
      </GridContainer>
    </Box>
  );
};

export default Client;

const TitleWrapper = styled(Box)(({ theme }) => {
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
});
