import { Fragment } from "react";
import { Stack, Box, Typography, styled } from "@mui/material";
import { useSetting, useDevice, useGlobal } from "../../hooks";
import { Image } from "../../hoc";
import { Social } from "../../components";
import PowerBy from "./PowerBy";

const Footer = ({ isSpecial, isPowerBy = true }) => {
  const { studio_logo, gaming_logo, footer_background, ...props } = useSetting();
  const { isMobile, isTablet } = useDevice();
  const context = useGlobal();

  return (
    <Fragment>
      <BoxWrapper
        sx={{
          height: isMobile ? 400 : isTablet ? 600 : 800,
          minHeight: isMobile ? 400 : isTablet ? 600 : 800,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "15%",
            transform: "translateX(-50%)",
            width: isMobile ? "90%" : null,
            zIndex: 2,
          }}
        >
          <Stack
            direction="column"
            justifyContent={"center"}
            alignItems={"center"}
            spacing={4}
          >
            {isSpecial || context.state.isSpecial ? (
              <Image
                src={gaming_logo}
                width={isMobile ? 150 : 500}
                height={isMobile ? 70 : 240}
              />
            ) : (
              <Image
                src={studio_logo}
                width={isMobile ? 150 : 700}
                height={isMobile ? 67 : 200}
              />
            )}

            <Typography
              variant="title2"
              color="common.white"
              sx={[
                isMobile && {
                  fontSize: 13,
                  fontWeight: 400,
                },
              ]}
            >
              THANK YOU FOR WATCHING !!!
            </Typography>
            <Social />
          </Stack>
        </Box>
        <BackgroundEffect
          sx={{
            height: isMobile ? 400 : isTablet ? 600 : 800,
          }}
        >
          <Image
            src={footer_background}
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="bottom"
          />
        </BackgroundEffect>
      </BoxWrapper>

      {isPowerBy && (
        <Box
          sx={{
            backgroundColor: "#000",
            width: "100%",
            textAlign: "center",
          }}
        >
          <PowerBy />
        </Box>
      )}
    </Fragment>
  );
};

export default Footer;

const BoxWrapper = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.common.black,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(6),
  };
});

const BackgroundEffect = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== "footer_background";
  },
})(({ theme }) => {
  return {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    objectFit: "contain",
    objectPosition: "center bottom",
  };
});
