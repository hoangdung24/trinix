import { Stack } from "@mui/material";
import { Image } from "../../hoc";
import { Navbar, GridContainer } from "../../components";

const Header = () => {
  return (
    <GridContainer
      OuterProps={{
        sx: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: 100,
          zIndex: 999,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Stack direction={"row"} justifyContent="space-between" alignItems={"center"}>
        <Image src="/logo-trinix.svg" width="264px" height="88px" />
        <Navbar />
      </Stack>
    </GridContainer>
  );
};

export default Header;
