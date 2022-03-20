import { useRouter } from "next/router";

import { Stack, Box, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { Image } from "../../hoc";
import { Navbar, GridContainer, Social } from "../../components";
import { useDevice } from "../../hooks";

const Header = () => {
  const { isMobile } = useDevice();
  const router = useRouter();

  if (isMobile) {
    return (
      <Box
        sx={{
          width: "100%",
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
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" justifyContent="center" alignItems="center">
              <IconButton
                sx={{
                  color: "common.white",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Image src="/logo-trinix.svg" alt="Trinix" width="75px" height="30px" />
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
