import useSWR from "swr";
import dynamic from "next/dynamic";

import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useToggle } from "react-use";
import { Fragment } from "react";

import NavItem from "./NavItem";

import { PAGES, CONTACT } from "../../api";
import { NAVBAR } from "../../routes";
import { useDevice } from "../../hooks";

const ContactPopup = dynamic(import("../Contact/ContactPopup"));

const NavList = ({ passHandler = () => {} }) => {
  const router = useRouter();
  const [open, toggle] = useToggle(false);

  const { data, error } = useSWR(() => {
    if (open) {
      return `${PAGES}?type=${CONTACT}&fields=*`;
    } else {
      return null;
    }
  });

  const { isTablet, isDesktop } = useDevice();

  return (
    <Fragment>
      <Stack
        spacing={0.5}
        sx={[
          {
            flexDirection: isTablet ? "column" : "row",
          },
          isTablet && {
            backgroundColor: "common.black",
          },
        ]}
      >
        {NAVBAR.map((el, idx) => {
          let onClick;

          if (el.route === "/contact") {
            if (isDesktop) {
              onClick = (e) => {
                e.stopPropagation();
                passHandler();
                toggle(true);
              };
            } else {
              onClick = (e) => {
                e.stopPropagation();

                router.push(el.route, el.route, {
                  shallow: true,
                });
                passHandler();
              };
            }
          } else {
            onClick = (e) => {
              e.stopPropagation();

              router.push(el.route, el.route, {
                shallow: true,
              });
              passHandler();
            };
          }

          return (
            <NavItem
              key={idx}
              title={el.name}
              onClick={onClick}
              sx={[
                {
                  position: "relative",
                },
                isTablet && {
                  "&:before": {
                    position: "absolute",
                    content: '""',
                    borderBottom: "0.5px solid rgba(255, 255, 255, 0.4)",
                    width: 0.8,
                    height: "1px",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                  },
                  "&:nth-last-of-type(1):before": {
                    display: "none",
                  },
                },
              ]}
            />
          );
        })}
      </Stack>

      <ContactPopup
        {...{
          open,
          toggle,
          data,
          error,
          passHandler,
        }}
      />
    </Fragment>
  );
};

export default NavList;
