import { Stack, Box as MuiBox, Typography, styled } from "@mui/material";
import { useSetting } from "../../../hooks";
import { Image } from "../../../hoc";
import { Social } from "../../../components";

const Footer = () => {
  const { studio_logo, ...props } = useSetting();

  return (
    <Box
      sx={{
        minHeight: 600,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Stack direction="column" justifyContent={"center"} alignItems={"center"} spacing={3}>
        <Image src={studio_logo} width={700} height={200} />
        <Typography variant="title2" color="common.white">
          THANK YOU FOR WATCHING !!!
        </Typography>
        <Social />
      </Stack>
    </Box>
  );
};

export default Footer;

const Box = styled(MuiBox)(({ theme }) => {
  return {
    backgroundColor: theme.palette.common.black,
  };
});
