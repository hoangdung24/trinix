import createDOMPurify from "dompurify";
import { useRouter } from "next/router";

import { Box, Grid, useTheme } from "@mui/material";
// background_color: "#000000"
// banner: "http://trinix.t-solution.vn/media/original_images/0f06cf09cfdc389afb90d2bbb3467fbb.jpeg"
// banner_video: {file: 'http://trinix.t-solution.vn/media/media/outputcompress-video-online.com.mp4', type: 'video', duration: 0, thumbnail: null}
// description: "<p data-block-key=\"g1ys2\">WELCOME</p><p data-block-key=\"agmv4\">WE ARE TRINIX</p><p data-block-key=\"ev6je\">WE CREATE REALITY WITH YOUR THOUGHTS</p>"
// description_color: "#ffffff"
// id: 15
// meta: {type: 'home.HomePage', detail_url: 'https://trinix.t-solution.vn/api/v2/pages/15/', url_path: '/homepage/', slug: 'homepage', seo_title: '', …}
// title: "HomePage

import { Button } from "../../components";
import { Image } from "../../hoc";
import { ROUTES } from "../../routes";
import { useDevice, useSetting } from "../../hooks";

const Home = ({ initData, ...props }) => {
  const router = useRouter();
  const { items } = initData;
  const { typography } = useTheme();
  const { isMobile, isTablet } = useDevice();
  const { studio_logo } = useSetting();

  const { background_color, banner, banner_video, description, description_color, title } =
    items?.[0];

  return (
    <Box
      sx={{
        backgroundColor: background_color,
        width: "100vw",
        // height: "100vh",
        // maxHeight: "100vh",
        // minHeight: "100vh",
        // maxHeight: isMobile ? `calc(100vh - 64px)` : "100vh",
      }}
    >
      <Grid
        container
        sx={[
          {
            width: "100%",
            maxHeight: "100vh",
            minHeight: "100vh",
          },
          // isMobile && {
          //   flexDirection: "column",
          // },
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
              // height: "fit-content",
            },
          ]}
        >
          {/* height={isTablet ? "300px" : "100%"} */}
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
              },
            }}
            objectFit="cover"
          />
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
                  <Image src={studio_logo} width="200px" height="90px" />
                </Box>
              )}

              <Box
                sx={{
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
                  __html: createDOMPurify.sanitize(description),
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
