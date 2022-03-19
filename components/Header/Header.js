import { Stack, Box } from "@mui/material";
import { Image } from "../../hoc";
import { Navbar, GridContainer } from "../../components";

const Header = () => {
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
        <Stack direction={"row"} width="100%" justifyContent="space-between" alignItems={"center"}>
          <Image src="/logo-trinix.svg" alt="Trinix" width="264px" height="88px" />
          <Navbar />
        </Stack>
      </GridContainer>
    </Box>
  );
};

export default Header;
