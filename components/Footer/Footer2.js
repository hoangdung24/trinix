import { Stack, Box, Typography, styled } from "@mui/material";
import { useSetting, useDevice } from "../../hooks";
import { Image } from "../../hoc";
import { Social } from "../../components";

const Footer = ({ isSpecial }) => {
  const { studio_logo, gaming_logo, footer_background, ...props } = useSetting();
  const { isMobile } = useDevice();

  return (
    <BoxWrapper
      sx={{
        height: !isMobile ? 800 : 272,
        minHeight: !isMobile ? 800 : 272,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "15%",
          transform: "translateX(-50%)",
        }}
      >
        <Stack direction="column" justifyContent={"center"} alignItems={"center"} spacing={4}>
          {isSpecial ? (
            <Image src={gaming_logo} width={isMobile ? 150 : 500} height={isMobile ? 70 : 240} />
          ) : (
            <Image src={studio_logo} width={isMobile ? 150 : 700} height={isMobile ? 67 : 200} />
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
          height: !isMobile ? 800 : 272,
        }}
        footer_background={footer_background}
      />
    </BoxWrapper>
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
})(({ theme, footer_background }) => {
  return {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundImage: `url('${footer_background}')`,
    backgroundPosition: "bottom",
    objectFit: "contain",
    objectPosition: "center bottom",
  };
});