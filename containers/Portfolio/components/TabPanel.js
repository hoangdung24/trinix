import { Fragment } from "react";

import { Box, Tabs, Typography } from "@mui/material";

import { GridContainer, Tab, Headline } from "../../../components";

const TabPanel = ({ data, value, onChange, isSpecial }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "540px",
        background: isSpecial
          ? "linear-gradient(360deg, #000000 22.43%, rgba(0, 0, 0, 0) 100%);"
          : "linear-gradient(0deg, #FFFFFF 30.3%, rgba(255, 255, 255, 0.88) 40.66%, rgba(255, 255, 255, 0) 78.94%);",
      }}
    >
      <GridContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {data.items.map((el) => {
            if (value == el.id) {
              return (
                <Fragment key={el.id}>
                  <Headline
                    variant="h1"
                    children={el.title}
                    sx={{
                      marginBottom: 4,
                    }}
                  />
                  <Typography variant="title1" children={el.description} />
                </Fragment>
              );
            } else {
              return null;
            }
          })}
        </Box>

        <Box>
          <Tabs
            value={value}
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
                "&:nth-last-of-type(1):before": {
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
            {data.items.map((el) => {
              return (
                <Tab
                  key={el.id}
                  label={el.title}
                  value={el.id.toString()}
                  isActive={el.id == value}
                  sx={{
                    color: isSpecial ? "common.white" : "common.black",
                  }}
                />
              );
            })}
          </Tabs>
        </Box>
      </GridContainer>
    </Box>
  );
};

export default TabPanel;
//
//
