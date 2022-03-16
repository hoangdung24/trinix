import { useState, Fragment } from "react";

import { Box, Tabs, Grid, Typography } from "@mui/material";

import { TopBanner, GridContainer, Tab, PortfolioCard, Headline } from "../../components";

import PortfolioList from "./components/PortfolioList";
import TabPanel from "./components/TabPanel";

const Portfolio = () => {
  const [value, setValue] = useState("1");

  const onChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <TopBanner />

      <TabPanel value={value} onChange={onChange} />

      <Box
        sx={{
          marginTop: 10,
        }}
      >
        <GridContainer>
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5].map((el) => {
              return (
                <Grid key={el} item xs={6}>
                  <PortfolioCard />
                </Grid>
              );
            })}
          </Grid>
        </GridContainer>
      </Box>
    </Box>
  );
};

export default Portfolio;
