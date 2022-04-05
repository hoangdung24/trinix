import { Box, Typography as MuiTypography, styled } from "@mui/material";

import { Image } from "../../hoc";

import { Button, GridContainer, PortfolioCard } from "..";

const PortfolioBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GridContainer>
        <Content>
          <Box
            sx={{
              marginBottom: "50px",
            }}
          >
            <Typography variant="h1">LET OUR WORKS</Typography>
            <Typography variant="h1">SPEAK FOR ITSELF</Typography>
          </Box>

          <Box
            sx={{
              marginBottom: "150px",
            }}
          >
            <Typography variant="title2">
              Trinix đã và đang làm việc với nhiều thương hiệu nổi tiếng tại Việt Nam và toàn thế
              giới. Mỗi dự án được thực hiện tại Trinix không chỉ là dự án của khách hàng, mà còn là
              dự án tâm huyết của riêng Trinix.
            </Typography>
          </Box>
          <Button
            title={"Scroll down"}
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
      <Image src="/background2.png" width={1920} height={1080} alt="Trinix" />
      <Background />
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
    width: "35%",
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

export default PortfolioBanner;
