import { useMemo } from "react";

import { useRouter } from "next/router";

import { Box } from "@mui/material";

import { SettingConfig } from "../../contexts";

import { Footer, Header, Footer2 } from "../../components";

import { useDevice } from "../../hooks";

const Layout = ({ children }) => {
  const { isMobile } = useDevice();
  const router = useRouter();

  const footerComponent = useMemo(() => {
    if (router.pathname === "/") {
      return null;
    }

    return !isMobile ? <Footer /> : <Footer2 />;
  }, [router, isMobile]);

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "100%",
        minWidth: "100%",
        minHeight: "100vh",
      }}
    >
      <SettingConfig>
        <Header />
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
          }}
        >
          {children}
        </Box>

        {footerComponent}
      </SettingConfig>
    </Box>
  );
};

export default Layout;
