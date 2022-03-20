import { Stack, Box, Typography, styled } from "@mui/material";
import { useSetting, useDevice } from "../../hooks";
import { Image } from "../../hoc";
import { Social } from "../../components";

const Footer = () => {
  const { studio_logo, ...props } = useSetting();
  const { isMobile } = useDevice();
  return (
    <BoxWrapper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: 1,
        paddingTop: 3,
        paddingBottom: 6,
      }}
    >
      <Stack direction="column" justifyContent={"center"} alignItems={"center"} spacing={3}>
        <Image src={studio_logo} width={isMobile ? 150 : 700} height={isMobile ? 75 : 200} />

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
    </BoxWrapper>
  );
};

export default Footer;

const BoxWrapper = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.palette.common.black,
  };
});
