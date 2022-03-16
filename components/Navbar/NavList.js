import { useRef } from "react";

import { useHoverDirty } from "react-use";

import { Stack, Divider } from "@mui/material";

import NavItem from "./NavItem";

const data = ["2D Projects", "3D Projects", "Visual Effects", "UI/UX Design", "Gaming"];

const NavList = () => {
  const navRef = useRef(null);
  const isHovering = useHoverDirty(navRef);
  return (
    <Stack
      ref={navRef}
      direction="row"
      spacing={0.5}
      divider={
        <Divider
          {...{
            orientation: "vertical",
            flexItem: true,
            sx: {
              transition: (theme) => {
                return `${theme.transitions.duration.standard}ms`;
              },
              borderColor: (theme) => {
                return isHovering ? "transparent" : theme.palette.common.white;
              },
              backgroundColor: (theme) => {
                return isHovering ? "transparent" : theme.palette.common.white;
              },
              borderWidth: 0.5,
            },
          }}
        />
      }
    >
      {data.map((el, index) => {
        return <NavItem key={index} title={el} />;
      })}
    </Stack>
  );
};

export default NavList;
