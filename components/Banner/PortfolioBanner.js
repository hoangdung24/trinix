import { Box, Typography, styled } from "@mui/material";

import { Image } from "../../hoc";

import { Button } from "../../components";

const PortfolioBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Content>
        <Typography variant="h1" color={"common.white"}>
          LET OUR WORKS
        </Typography>
        <Typography variant="h1" color={"common.white"} marginBottom="50px">
          SPEAK FOR ITSELF
        </Typography>
        <Typography variant="title2" color={"common.white"}>
          Trinix đã và đang làm việc với nhiều thương hiệu nổi tiếng tại Việt Nam và toàn thế giới.
          Mỗi dự án được thực hiện tại Trinix không chỉ là dự án của khách hàng, mà còn là dự án tâm
          huyết của riêng Trinix.
        </Typography>

        <Button
          title={"Scroll down"}
          isBackground={false}
          IconProps={{
            sx: {
              transform: "rotate(90deg)",
            },
          }}
        />
      </Content>
      <Image src="/background2.png" width={1920} height={1080} />

      <Background />
    </Box>
  );
};

const Content = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    left: "20%",
    top: "36%",
    width: "35%",
    zIndex: 2,
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
