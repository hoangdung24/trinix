import { useMemo } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

import isEmpty from "lodash/isEmpty";

import { useDevice, useSetting } from "../../hooks";
import { Footer, Header, Footer2 } from "../../components";

const Layout = ({ children }) => {
  const { isMobile, isTablet } = useDevice();
  const setting = useSetting();
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
      {!isEmpty(setting) && <Header />}

      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
        }}
      >
        {children}
      </Box>

      {!isEmpty(setting) && footerComponent}
    </Box>
  );
};

export default Layout;
