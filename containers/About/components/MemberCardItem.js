import { Box, Typography, Stack } from "@mui/material";

import { Image } from "../../../hoc";

import { Headline } from "../../../components";

const MemberCardItem = () => {
  return (
    <Stack justifyContent="center" alignItems={"center"} marginBottom={5}>
      <Image
        src={"/background2.png"}
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
        <Headline variant="h2">Name</Headline>
        <Typography
          variant="title1"
          sx={{
            fontWeight: 700,
          }}
        >
          Title
        </Typography>
      </Box>
    </Stack>
  );
};

export default MemberCardItem;
