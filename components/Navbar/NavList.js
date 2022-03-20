import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useToggle } from "react-use";

import NavItem from "./NavItem";
import Contact from "../Contact";

import { NAVBAR } from "../../routes";

const NavList = () => {
  const router = useRouter();
  const [open, toggle] = useToggle();

  return (
    <Stack direction="row" spacing={0.5}>
      {NAVBAR.map((el, idx) => {
        let onClick;

        if (el.route === "/contact") {
          onClick = () => {
            toggle(true);
          };
        } else {
          onClick = () => {
            router.push(el.route, el.route, {
              shallow: true,
            });
          };
        }

        return <NavItem key={idx} title={el.name} onClick={onClick} />;
      })}
      {open && (
        <Contact
          {...{
            open,
            toggle,
          }}
        />
      )}
    </Stack>
  );
};

export default NavList;
