import { useRef, useEffect, useState } from "react";
import { useSetting, useDevice } from "../../hooks";

import { Box, styled, Typography, Stack } from "@mui/material";

import { Image } from "../../hoc";
import { Button, Headline, Social } from "../../components";

const ContactContent = ({ data }) => {
  const setting = useSetting();
  const containerRef = useRef(null);
  const { isMobile, isTablet, isMediumDesktop } = useDevice();
  const { addresses, work_with_us_link, footer_background } = setting;
  const [height, setHeight] = useState(0);
  const businessInfo = addresses?.[0];

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.clientHeight);
    }
  }, [containerRef]);

  return (
    <Stack direction={isTablet ? "column" : "row"} spacing={isTablet ? 0 : 3} ref={containerRef}>
      <Box
        sx={[
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          },
          isTablet && {
            order: 2,
          },
        ]}
      >
        <Box
          sx={{
            width: "100%",
            ...(!isMediumDesktop && {
              textAlign: "center",
            }),
            ...(isTablet && {
              marginTop: 3,
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

          {isTablet ? (
            <Image
              src={footer_background}
              width="100%"
              height="150px"
              objectFit="cover"
              objectPosition="bottom"
            />
          ) : (
            <Box paddingY={2}></Box>
          )}
        </Box>
      </Box>
      <Box
        sx={[
          isTablet
            ? {
                width: "100vw",
                height: "105vw",
              }
            : {
                width: (height * 942) / 722,
                height: height,
              },

          isTablet && {
            order: 1,
          },
        ]}
      >
        <Image
          src={data.items[0].banner}
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
    </Stack>
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
