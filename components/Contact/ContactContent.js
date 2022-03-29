import { useSetting, useDevice } from "../../hooks";

import { Box, styled, Typography, Grid } from "@mui/material";

import { Image } from "../../hoc";
import { Button, Headline, Social } from "../../components";

const ContactContent = ({ data }) => {
  const setting = useSetting();
  const { isTablet, isMediumDesktop } = useDevice();

  const { addresses, work_with_us_link, footer_background } = setting;

  const businessInfo = addresses?.[0];

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
            <Wrapper>
              <Headline
                variant={isTablet ? "title1" : "h1"}
                sx={[
                  isTablet && {
                    fontWeight: 700,
                  },
                ]}
              >
                Contact Us
              </Headline>
            </Wrapper>

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
                    window.location = work_with_us_link;
                  }}
                  isIcon={false}
                  isBackground={false}
                  sx={{
                    paddingLeft: 0,
                  }}
                />
              </Box>
            )}

            <Image
              src={footer_background}
              width="100%"
              height="150px"
              objectFit="cover"
              objectPosition="bottom"
            />
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
            src={data.items[0].banner}
            width={"100%"}
            height={"100%"}
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactContent;

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
