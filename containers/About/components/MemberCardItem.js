import { Box, Typography, Stack } from "@mui/material";

import { Image } from "../../../hoc";

import { Headline } from "../../../components";

const MemberCardItem = ({ name, title, image }) => {
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
        <Headline variant="h2">{name}</Headline>
        <Typography
          variant="title1"
          sx={{
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
      </Box>
    </Stack>
  );
};

export default MemberCardItem;
