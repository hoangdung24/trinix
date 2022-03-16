import { Box, Paper } from "@mui/material";

import { Footer, Header } from "../../components";

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
      <Paper>
        <Header />
        {children}
        <Footer />
      </Paper>
    </Box>
  );
};

export default Layout;
