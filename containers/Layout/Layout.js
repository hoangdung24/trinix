import { Box, Grid } from "@mui/material";

import { Footer, TopBanner, Header } from "../../components";

const Layout = ({ children }) => {
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
      }}
    >
      <Header />
      <TopBanner />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
