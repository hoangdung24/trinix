import { useRouter } from "next/router";

import { Stack, Box, Typography } from "@mui/material";

import { Image } from "../../hoc";
import { Navbar, GridContainer, Social } from "../../components";
import { useDevice } from "../../hooks";

import Hamberger from "./Hamberger";

const Header = () => {
  const { isMobile, isTablet } = useDevice();
  const router = useRouter();

  if (isTablet) {
    return (
      <Box
        sx={{
          width: "100%",
          minHeight: "64px",
          background: (theme) => {
            return theme.palette.common.black;
          },
          paddingY: 1.5,
        }}
      >
        <GridContainer
          OuterProps={{
            sx: {
              maxWidth: "100%",
            },
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={[
              isMobile && {
                height: 40,
              },
            ]}
          >
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Box
                sx={{
                  position: "relative",
                  width: 40,
                  height: 40,
                }}
              >
                <Box
                  sx={{
                    position: "fixed",
                    zIndex: 1301,
                    backgroundColor: "black",
                  }}
                >
                  <Hamberger />
                </Box>
              </Box>
              {router.pathname === "/" ? (
                <Typography
                  variant="categoryBold"
                  sx={{
                    color: "common.white",
                    lineHeight: "16px",
                  }}
                >
                  MENU
                </Typography>
              ) : (
                <Image src="/logo-trinix.svg" alt="Trinix" width="75px" height="30px" />
              )}
            </Stack>
            <Social />
          </Stack>
        </GridContainer>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: 88,
          zIndex: 999,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <GridContainer>
          <Stack
            direction={"row"}
            width="100%"
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Box
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                router.push("/", "/", {
                  shallow: true,
                });
              }}
            >
              <Image src="/logo-trinix.svg" alt="Trinix" width="264px" height="88px" />
            </Box>
            <Navbar />
          </Stack>
        </GridContainer>
      </Box>
    );
  }
};

export default Header;
