import { useMemo, Fragment } from "react";

import { Box, Tabs, Stack, Typography } from "@mui/material";

import { GridContainer, Tab, Metadata, Headline } from "../../../components";

import { getElement } from "../utils";

import { useDevice } from "../../../hooks";

const TabPanel = ({ data, value, onChange, isSpecial }) => {
  const { isMobile } = useDevice();

  const MetadataComponent = useMemo(() => {
    const item = getElement(value, data?.items);

    return (
      <Metadata
        {...{
          isSpecial,
          data: item,
        }}
      />
    );
  }, [value, data, isSpecial]);

  if (!isMobile) {
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
              marginTop: 10,
              userSelect: "none",
              ...(isSpecial && {
                position: "absolute",
                left: "50%",
                bottom: "50%",
                transform: "translate(-50%, 0)",
              }),
            }}
          >
            {MetadataComponent}
          </Box>

          <Box>
            <Tabs
              value={value}
              onChange={onChange}
              sx={{
                position: "absolute",
                top: "80%",
                left: "50%",
                width: "100%",
                transform: "translate(-50%, -50%)",

                "& .MuiTabs-flexContainer": {
                  flexWrap: "wrap",
                  justifyContent: "center",
                },
              }}
              TabIndicatorProps={{
                sx: {
                  display: "none",
                },
              }}
            >
              {data.items.map((el, idx) => {
                return (
                  <Tab
                    className="tab"
                    key={el.id}
                    label={el.title}
                    value={el.id.toString()}
                    isActive={el.id == value}
                    isSpecial={isSpecial}
                    component={Typography}
                    isLast={data.items.length - 1 == idx}
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
  } else {
    return (
      <Box
        sx={{
          backgroundColor: isSpecial ? "common.black" : "common.white",
          paddingBottom: 6,
        }}
      >
        <GridContainer>
          <Stack
            sx={{
              alignItems: "center",
              paddingY: 6,
            }}
          >
            {MetadataComponent}
          </Stack>

          <Box>
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={onChange}
              sx={[
                {
                  "& .MuiTabs-flexContainer": {
                    flexWrap: "wrap",
                    justifyContent: "center",
                  },
                },
              ]}
              TabIndicatorProps={{
                sx: {
                  display: "none",
                },
              }}
            >
              {data.items.map((el, idx) => {
                return (
                  <Tab
                    className="tab"
                    key={el.id}
                    label={el.title}
                    value={el.id.toString()}
                    isActive={el.id == value}
                    isSpecial={isSpecial}
                    component={Typography}
                    isLast={data.items.length - 1 == idx}
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
  }
};

export default TabPanel;
