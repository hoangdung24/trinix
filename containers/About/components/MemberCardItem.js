import { Box, Typography, Stack } from "@mui/material";

import { Image } from "../../../hoc";

import { Headline } from "../../../components";

import { useDevice } from "../../../hooks";

const MemberCardItem = ({ name, title, image }) => {
  const { isMobile } = useDevice();

  console.log(isMobile);

  return (
    <Stack justifyContent="center" alignItems={"center"} marginBottom={5}>
      <Image
        src={image}
        width={300}
        height={300}
        alt={""}
        objectFit="cover"
        WrapperProps={{
          sx: {
            borderRadius: "50%",
            overflow: "hidden",
          },
        }}
      />
      <Box
        sx={{
          marginTop: 2,
          textAlign: "center",
        }}
      >
        <Headline
          variant={isMobile ? "categoryBold" : "h2"}
          style={{
            display: "block",
            marginBottom: "5px",
          }}
        >
          {name}
        </Headline>
        <Typography
          variant={isMobile ? "category" : "title1"}
          sx={{
            fontWeight: isMobile ? 400 : 700,
            display: "block",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Stack>
  );
};

export default MemberCardItem;
