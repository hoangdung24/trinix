import { useMemo } from "react";

import {
  Box,
  styled,
  Typography,
  Grid,
  Dialog as MuiDialog,
  DialogContent as MuiDialogContent,
} from "@mui/material";

import { Image, LoadingData, Link } from "../../hoc";
import { Button, Headline, Social } from "../../components";
import { useSetting, useDevice } from "../../hooks";

const Contact = ({ open, toggle, data, error, passHandler, ...props }) => {
  const setting = useSetting();
  const { isMediumDesktop } = useDevice();

  const { addresses, work_with_us_link } = setting;

  const businessInfo = addresses?.[0];

  const children = useMemo(() => {
    const imgSrc = data?.items?.[0]?.banner;

    return (
      <LoadingData data={data} error={error}>
        {() => {
          return (
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                lg={4}
                sx={[
                  !isMediumDesktop && {
                    order: 2,
                  },
                ]}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      ...(!isMediumDesktop && {
                        textAlign: "center",
                      }),
                    }}
                  >
                    <Headline
                      variant="h1"
                      sx={{
                        marginBottom: 6,
                      }}
                    >
                      Contact Us
                    </Headline>

                    <Wrapper>
                      <SubTitle variant="categoryBold">Address:</SubTitle>
                      <Text>{businessInfo?.address}</Text>
                    </Wrapper>
                    <Wrapper>
                      <SubTitle variant="categoryBold">Contact Info:</SubTitle>
                      <Text>
                        {"Hotline: "}
                        {businessInfo?.phone_numbers.map((el, idx) => {
                          return (
                            <Text key={idx} component={"span"}>
                              {idx !== 0 && " - "}
                              {el?.value}
                            </Text>
                          );
                        })}
                      </Text>

                      <Text>Email: {businessInfo?.email}</Text>
                    </Wrapper>

                    <Wrapper>
                      <SubTitle variant="categoryBold">Social Network:</SubTitle>
                      <Social />
                    </Wrapper>

                    {work_with_us_link && (
                      <Box>
                        <Button
                          title="WORK WITH US"
                          onClick={() => {
                            window.location(work_with_us_link);
                          }}
                          isIcon={false}
                          isBackground={false}
                          sx={{
                            paddingLeft: 0,
                          }}
                        />
                      </Box>
                    )}

                    {!isMediumDesktop && (
                      <Box
                        sx={{
                          paddingY: 5,
                        }}
                      ></Box>
                    )}
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                lg={8}
                sx={[
                  !isMediumDesktop && {
                    order: 1,
                  },
                ]}
              >
                <Box
                  sx={{
                    width: 1,
                    height: !isMediumDesktop ? 400 : 1,
                  }}
                >
                  <Image
                    src={imgSrc}
                    width={"100%"}
                    height={"100%"}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              </Grid>
            </Grid>
          );
        }}
      </LoadingData>
    );
  });

  return (
    <Dialog
      {...{
        open,
        onClose: () => {
          toggle(false);
          passHandler();
        },
        PaperProps: {
          sx: {
            width: isMediumDesktop ? "80vw" : "100vw",
            maxWidth: isMediumDesktop ? "80vw" : "100vw",
            maxHeight: isMediumDesktop ? "40vw" : "100vh",
            margin: 0,
          },
        },
        ...props,
      }}
    >
      <DialogContent
        sx={{
          overflowX: "hidden",
          ...(!isMediumDesktop && {
            padding: 0,
          }),
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Contact;

const Dialog = styled(MuiDialog)(({ theme }) => {
  return {};
});

const DialogContent = styled(MuiDialogContent)(({ theme }) => {
  return {
    background: theme.palette.common.black,
  };
});

const SubTitle = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.white,
  };
});

const Text = styled(Typography)(({ theme }) => {
  return {
    color: "rgba(255, 255, 255, 0.65)",
    fontSize: "13px",
    fontWeight: "400",
  };
});

const Wrapper = styled(Box)(({ theme }) => {
  return {
    marginBottom: theme.spacing(6),
  };
});
