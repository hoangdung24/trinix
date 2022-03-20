import { Box, Typography, styled } from "@mui/material";

import { GridContainer } from "../../../components";

import ClientList from "./ClientList";

const Client = () => {
  return (
    <Box>
      <TitleWrapper>
        <Typography
          variant="h2"
          sx={{
            marginX: "auto",
            width: "fit-content",
            background: (theme) => {
              return theme.palette.common.white;
            },
            padding: (theme) => {
              return theme.spacing(2, 15);
            },
          }}
        >
          Our Clients
        </Typography>
      </TitleWrapper>

      <GridContainer>
        <Box marginY={8}>
          <ClientList />
        </Box>
      </GridContainer>
    </Box>
  );
};

export default Client;

const TitleWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    ":before": {
      content: '""',
      position: "absolute",
      backgroundColor: theme.palette.common.black,
      height: "4px",
      width: "100%",
      top: "50%",
      left: 0,
      transform: "translateY(-50%)",
      zIndex: -1,
    },
  };
});
