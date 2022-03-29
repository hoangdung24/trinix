import { useState } from "react";

import { Box, IconButton, Slide, styled } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { Navbar } from "../../components";

const Hamberger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <IconButton
        sx={{
          color: "common.white",
        }}
        onClick={(e) => {
          setIsOpen((prev) => {
            return !prev;
          });
        }}
      >
        <MenuIcon />
      </IconButton>
      <Slide in={isOpen} direction="right" mountOnEnter unmountOnExit>
        <NavbarWrapper>
          <Navbar
            passHandler={() => {
              setIsOpen(false);
            }}
          />
        </NavbarWrapper>
      </Slide>
    </Box>
  );
};
export default Hamberger;

const NavbarWrapper = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    top: "64px",
    left: 0,
    zIndex: 10,
    color: "white",
  };
});
