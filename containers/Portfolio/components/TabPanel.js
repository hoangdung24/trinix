import { Fragment } from "react";

import { Box, Tabs, Typography } from "@mui/material";

import { GridContainer, Tab, Headline } from "../../../components";

const TabPanel = ({ value, onChange }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "30%",
        left: 0,
        width: "100%",
        height: "500px",
        background:
          "linear-gradient(0deg, #FFFFFF 30.3%, rgba(255, 255, 255, 0.88) 40.66%, rgba(255, 255, 255, 0) 78.94%);",
      }}
    >
      <GridContainer
        InnerProps={{
          sx: {
            justifyContent: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {value === "1" && (
            <Fragment>
              <Headline
                variant="h1"
                children={"2D Projects"}
                sx={{
                  marginBottom: 4,
                }}
              />
              <Typography
                variant="title1"
                children={"It's a visual world and people respond to visuals."}
              />
            </Fragment>
          )}

          {value === "2" && (
            <Fragment>
              <Headline
                variant="h1"
                children={"3D Project"}
                sx={{
                  marginBottom: 4,
                }}
              />
              <Typography
                variant="title1"
                children={"The idea part is simple but the implementation process is complex."}
              />
            </Fragment>
          )}
        </Box>

        <Box>
          <Tabs
            onChange={onChange}
            sx={{
              position: "absolute",
              top: "80%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              "& .tab": {
                position: "relative",
                "&:before": {
                  position: "absolute",
                  content: '""',
                  width: "1px",
                  height: "65%",
                  backgroundColor: "#000",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: 0,
                },
                "&:nth-last-child(1):before": {
                  display: "none",
                },
              },
            }}
            TabIndicatorProps={{
              sx: {
                display: "none",
              },
            }}
          >
            <Tab label="Item One" className="tab" value="1" isActive={value === "1"} />
            <Tab label="Item Two" className="tab" value="2" isActive={value === "2"} />
            <Tab label="Item Three" className="tab" value="3" isActive={value === "3"} />
          </Tabs>
        </Box>
      </GridContainer>
    </Box>
  );
};

export default TabPanel;
