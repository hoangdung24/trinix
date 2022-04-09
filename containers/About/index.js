import { useMemo } from "react";

import { Box, Typography } from "@mui/material";
import { TopBanner, GridContainer } from "../../components";
import { Image, SEO } from "../../hoc";
import { useDevice } from "../../hooks";
import MemberList from "./components/MemberList";
import Client from "./components/Client";

const About = ({ aboutData }) => {
  const data = aboutData?.items?.[0];

  // console.log(data);

  const { isMobile, isTablet, isMediumDesktop } = useDevice();

  const BackgroundMemo = useMemo(() => {
    let height = 1080;
    let objectFit = "cover";
    if (isMobile) {
      height = 400;
    } else if (isTablet) {
      height = 600;
    } else if (isMediumDesktop) {
      height = 1080;
    } else {
      height = 800;
    }

    return (
      <TopBanner imageSrc={data?.banner} width={"100%"} height={height} objectFit={objectFit} />
    );
  }, [isMobile, isTablet, data]);

  return (
    <Box>
      <SEO data={data.meta} />
      <Box
        sx={{
          position: "relative",
        }}
      >
        {BackgroundMemo}

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "400px",
            background:
              "linear-gradient(0deg, #FFFFFF 30.3%, rgba(255, 255, 255, 0.88) 54.97%, rgba(255, 255, 255, 0) 78.94%);",
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
                position: "absolute",
                left: "50%",
                bottom: isTablet ? 0 : "35%",
                transform: "translate(-50%, 0)",
                width: () => {
                  return isTablet ? "85%" : null;
                },
              }}
            >
              <Box>
                {isMobile ? (
                  <Image src={data?.front_image} width="250px" height="90px" />
                ) : isTablet ? (
                  <Image src={data?.front_image} width="350px" height="120px" />
                ) : (
                  <Image src={data?.front_image} width="600px" height="300px" />
                )}
              </Box>

              <Box
                className="underline"
                sx={{
                  width: () => {
                    return isMobile ? 0.9 : "75%";
                  },
                  height: 4,
                  backgroundColor: "common.black",
                  marginTop: 0,
                  marginBottom: 2,
                }}
              />

              <Typography
                variant={isMobile ? "title1" : "h1"}
                children={data?.title}
                sx={{
                  marginBottom: 4,
                  textTransform: "uppercase",
                  fontWeight: (theme) => {
                    return isMobile ? "700" : null;
                  },
                }}
              />
              <Typography
                variant="bodyTextBold"
                sx={[
                  {
                    color: "common.black",
                    textAlign: "center",
                  },
                  isMobile && {
                    fontSize: "10px",
                    lineHeight: "12px",
                  },
                ]}
                children={data?.description}
              />
            </Box>
          </GridContainer>
        </Box>
      </Box>
      <Box
        maxWidth={"60%"}
        marginX="auto"
        sx={[
          isTablet && {
            marginTop: 8,
          },
        ]}
      >
        <MemberList data={data?.members} />
      </Box>
      <Client data={data?.clients} />
    </Box>
  );
};

export default About;
