import { Box, Typography } from "@mui/material";
import { TopBanner, GridContainer } from "../../components";
import { Image } from "../../hoc";
import { useSetting, useDevice } from "../../hooks";
import MemberList from "./components/MemberList";
import Client from "./components/Client";

const About = ({ aboutData }) => {
  const setting = useSetting();
  const data = aboutData?.items?.[0];

  const { isMobile } = useDevice();

  console.log(aboutData);

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
        }}
      >
        {isMobile ? (
          <TopBanner imageSrc={data?.banner} width={"100%"} height={400} objectFit="cover" />
        ) : (
          <TopBanner imageSrc={data?.banner} width={1920} height={1080} />
        )}

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
                bottom: isMobile ? 0 : "35%",
                transform: "translate(-50%, 0)",
                width: () => {
                  return isMobile ? "85%" : null;
                },
              }}
            >
              <Box>
                {isMobile ? (
                  <Image src={setting?.studio_logo} width="250px" height="90px" />
                ) : (
                  <Image src={setting?.studio_logo} width="600px" height="300px" />
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
                  marginTop: 6,
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
        maxWidth={"50%"}
        marginX="auto"
        sx={[
          isMobile && {
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
