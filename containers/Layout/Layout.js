import { useMemo } from "react";

import { useRouter } from "next/router";

import { Box } from "@mui/material";

import { useDevice } from "../../hooks";
import { Footer, Header, Footer2 } from "../../components";
import { SettingConfig, GlobalConfig } from "../../contexts";

const Layout = ({ children }) => {
  const { isMobile, isTablet } = useDevice();
  const router = useRouter();

  const footerComponent = useMemo(() => {
    if (router.pathname === "/") {
      return null;
    }

    if (router.pathname === "/contact" && isTablet) {
      return null;
    }

    return isTablet ? <Footer2 /> : <Footer />;
  }, [router, isTablet, isMobile]);

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
        <GlobalConfig>
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
        </GlobalConfig>
      </SettingConfig>
    </Box>
  );
};

export default Layout;
