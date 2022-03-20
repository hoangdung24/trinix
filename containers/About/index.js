import { Box, Typography } from "@mui/material";

import { TopBanner, GridContainer } from "../../components";
import { Image } from "../../hoc";
import { useSetting } from "../../hooks";
import MemberList from "./components/MemberList";
import Client from "./components/Client";

const About = () => {
  const setting = useSetting();

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <TopBanner imageSrc={"/background2.png"} width={1920} height={1080} />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "540px",
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
                bottom: "50%",
                transform: "translate(-50%, 0)",
              }}
            >
              <Box>
                <Image src={setting.gaming_logo} width="600px" height="300px" />
              </Box>
              <Box
                sx={{
                  width: "75%",
                  height: 4,
                  backgroundColor: "common.black",
                  marginTop: 6,
                  marginBottom: 2,
                }}
              />

              <Typography
                variant="h1"
                children={"Our Team"}
                sx={{
                  marginBottom: 4,
                  textTransform: "uppercase",
                }}
              />
              <Typography
                variant="bodyTextBold"
                sx={{
                  color: "common.black",
                  textAlign: "center",
                }}
                children={
                  "Trinix là Studio Sáng Tạo và Nhà Sản Xuất Hậu Kỳ tại Sài Gòn, Việt Nam. Studio tập hợp những bạn trẻ đủ sáng tạo và thừa nhiệt huyết cùng nhau hợp tác, thực hiện những sản phẩm tốt nhất gửi đến khách hàng."
                }
              />
            </Box>
          </GridContainer>
        </Box>
      </Box>
      <Box maxWidth={"50%"} marginX="auto">
        <MemberList />
      </Box>
      <Client />
    </Box>
  );
};

export default About;
