import { Box, Typography } from "@mui/material";
import { GridContainer } from "../../../components";

import { Image } from "../../../hoc";
import { useDevice } from "../../../hooks";

const Banner = ({ imageSrc }) => {
  const { isDesktop, isMediumDesktop } = useDevice();

  return (
    <Box
      sx={{
        position: "relative",
        "&:before": {
          position: "absolute",
          content: '""',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background:
            "linear-gradient(90deg, #000111 0%, rgba(0, 1, 17, 0.88) 37.4%, rgba(0, 1, 17, 0) 97.42%)",
          zIndex: 1,
        },
      }}
    >
      <Image width="100vw" height={"100vh"} src={imageSrc} objectFit={"100vh"} />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          color: (theme) => {
            return theme.palette.common.white;
          },
        }}
      >
        <GridContainer
          OuterProps={{
            sx: {
              height: "100%",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                textTransform: "uppercase",
              }}
            >
              Blog
            </Typography>
          </Box>
        </GridContainer>
      </Box>
    </Box>
  );
};

export default Banner;
