import { Image } from "../../hoc";
import { Button, GridContainer } from "../../components";
import { Box, Typography as MuiTypography, styled } from "@mui/material";

import { useDevice } from "../../hooks";

import get from "lodash/get";

const PortfolioCategoryBanner = ({ data }) => {
  const { isTablet } = useDevice();

  data = get(data, "items[0]");

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {!isTablet && (
        <GridContainer>
          <Content>
            <Box
              sx={{
                marginBottom: "50px",
              }}
            >
              <Typography variant="h1">{get(data, "title")}</Typography>
            </Box>

            <Box
              sx={{
                marginBottom: "150px",
              }}
            >
              <Typography variant="title2">{get(data, "description")}</Typography>
            </Box>
            <Button
              title={"Scroll down"}
              onClick={() => {
                window.location = "#headline";
              }}
              isBackground={false}
              IconProps={{
                sx: {
                  transform: "rotate(90deg)",
                },
              }}
              sx={{
                paddingLeft: 0,
              }}
            />
          </Content>
        </GridContainer>
      )}

      {!isTablet ? (
        <Image
          src={get(data, "banner")}
          width={"100%"}
          height={1080}
          objectFit="cover"
          alt="Trinix"
        />
      ) : (
        <Image
          src={get(data, "banner")}
          width={"100%"}
          height={400}
          alt="Trinix"
          objectFit="cover"
        />
      )}

      {!isTablet && <Background />}
    </Box>
  );
};

const Typography = styled(MuiTypography)(({ theme }) => {
  return {
    color: theme.palette.common.white,
  };
});

const Content = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    zIndex: 2,
    top: "50%",
    transform: "translateY(-50%)",
    width: "45%",
  };
});

const Background = styled(Box)(({ theme }) => {
  return {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background:
      "linear-gradient(90deg, #000111 0%, rgba(0, 1, 17, 0.88) 37.4%, rgba(0, 1, 17, 0) 97.42%)",
  };
});

export default PortfolioCategoryBanner;
