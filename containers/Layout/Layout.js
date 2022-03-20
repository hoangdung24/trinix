import { SettingConfig } from "../../contexts";

import { Box } from "@mui/material";

import { Footer, Header, Footer2 } from "../../components";

import { useDevice } from "../../hooks";

const Layout = ({ children }) => {
  const { isMobile } = useDevice();

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

        {!isMobile ? <Footer /> : <Footer2 />}
      </SettingConfig>
    </Box>
  );
};

export default Layout;
