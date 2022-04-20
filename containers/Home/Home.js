import DOMPurify from "isomorphic-dompurify";
import { useRouter } from "next/router";
import { Box, Grid, useTheme } from "@mui/material";

import { Button } from "../../components";
import { Image, SEO } from "../../hoc";
import { ROUTES } from "../../routes";
import { useDevice, useSetting } from "../../hooks";

import Video from "./components/Video";

const Home = ({ initData, ...props }) => {
  const router = useRouter();
  const { items } = initData;
  const { typography } = useTheme();
  const { isMobile, isTablet } = useDevice();
  const { studio_logo } = useSetting();

  const { background_color, banner, banner_video, description, description_color } = items?.[0];

  return (
    <Box
      sx={{
        backgroundColor: background_color,
        width: "100vw",
      }}
    >
      <SEO data={items?.[0]?.meta} />

      <Grid
        container
        sx={[
          {
            width: "100%",
            minHeight: "100vh",
          },
        ]}
      >
        <Grid
          item
          md={7}
          lg={8}
          width="100%"
          sx={[
            isTablet && {
              order: 2,
              height: 1,
            },
          ]}
        >
          {banner_video ? (
            <Box
              sx={{
                pointerEvents: "none",
                height: (theme) => {
                  if (isMobile) {
                    return "500px";
                  }

                  if (isTablet) {
                    return "600px";
                  }

                  return 1;
                },
              }}
            >
              <Video src={banner_video.file} />
            </Box>
          ) : (
            <Image
              src={banner}
              width="100%"
              WrapperProps={{
                sx: {
                  height: (theme) => {
                    if (isMobile) {
                      return "300px";
                    }

                    if (isTablet) {
                      return "400px";
                    }

                    return 1;
                  },
                  minHeight: "300px",
                },
              }}
              objectFit="cover"
            />
          )}
        </Grid>

        <Grid
          item
          width="100%"
          md={5}
          lg={4}
          sx={[
            isTablet && {
              order: 1,
              flexGrow: 1,
            },
          ]}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={[
                { padding: 3 },

                isMobile && {
                  width: 0.8,
                },
              ]}
            >
              {isMobile && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {studio_logo && <Image src={studio_logo} width="200px" height="90px" />}
                </Box>
              )}

              <Box
                sx={{
                  wordWrap: "break-word",
                  color: description_color,

                  ...(isMobile && {
                    textAlign: "center",
                  }),

                  marginBottom: 5,
                  "& > *": {
                    ...typography.title2,
                  },

                  "& :nth-of-type(1)": {
                    ...(isMobile
                      ? {
                          ...typography.title1,
                          fontWeight: 700,
                        }
                      : typography.h1),

                    marginBottom: 2,
                    background: "linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    whiteSpace: "nowrap",
                  },

                  "& :nth-of-type(2)": {
                    ...(isMobile && {
                      ...typography.bodyTextBold,
                    }),
                  },

                  "& :nth-of-type(3)": {
                    ...(isMobile && {
                      ...typography.title2,
                    }),
                  },
                }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(description),
                }}
              ></Box>

              <Box
                sx={[
                  {
                    position: "relative",

                    zIndex: 3,
                  },
                  isMobile && {
                    display: "flex",
                    justifyContent: "center",
                  },
                ]}
              >
                <Button
                  title={"See our works"}
                  isBackground={true}
                  onClick={() => {
                    router.push(`${ROUTES.PORTFOLIO_CATEGORY}`);
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
