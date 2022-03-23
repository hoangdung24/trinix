import useSWR from "swr";
import dynamic from "next/dynamic";

import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useToggle } from "react-use";

import NavItem from "./NavItem";

import { PAGES, CONTACT } from "../../api";
import { NAVBAR } from "../../routes";

const Contact = dynamic(import("../Contact"));

const NavList = () => {
  const router = useRouter();
  const [open, toggle] = useToggle(false);

  const { data, error } = useSWR(() => {
    if (open) {
      return `${PAGES}?type=${CONTACT}&fields=*`;
    } else {
      return null;
    }
  });

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
      <Contact
        {...{
          open,
          toggle,
          data,
          error,
        }}
      />
    </Stack>
  );
};

export default NavList;
