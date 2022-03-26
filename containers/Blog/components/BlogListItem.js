import { useCallback } from "react";
import { Box, Typography, styled, Stack } from "@mui/material";

import { Image } from "../../../hoc";
import { Headline } from "../../../components";

import { useDevice } from "../../../hooks";

const BlogListItem = ({ choosePostHandler, ...props }) => {
  const { banner, title, meta, tags } = props;
  const { first_published_at } = meta;
  const { isTablet } = useDevice();
  const onClick = useCallback((data) => {
    return (_) => {
      choosePostHandler(_, data);
    };
  }, []);

  return (
    <BoxWrapper onClick={onClick(props)} isTablet={isTablet}>
      <BoxImage isTablet={isTablet}>
        {banner && <Image src={banner} width="100%" height="100%" objectFit="cover" />}
      </BoxImage>
      <BoxContent className="blog-content" isTablet={isTablet}>
        <Box
          sx={{
            position: "relative",
            height: "100%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
            }}
          >
            <Stack spacing={0.75}>
              <Typography
                variant={isTablet ? "categoryBold" : "title1"}
                sx={{
                  color: "common.white",
                  fontWeight: 700,
                }}
              >
                {title}
              </Typography>

              <Stack direction="row" spacing={1}>
                {tags.map((el, idx) => {
                  return (
                    <Headline
                      key={idx}
                      variant="category"
                      sx={[
                        isTablet && {
                          fontSize: "10px",
                          lineHeight: "12px",
                          fontWeight: 500,
                        },
                      ]}
                    >
                      {el}
                    </Headline>
                  );
                })}
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
            }}
          >
            <Typography
              variant="category"
              color="white"
              sx={[
                isTablet && {
                  fontSize: "10px",
                  lineHeight: "12px",
                  fontWeight: 500,
                },
              ]}
            >
              {new Date(first_published_at).toLocaleDateString("vi-VN", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </Typography>
          </Box>
        </Box>
      </BoxContent>
    </BoxWrapper>
  );
};

export default BlogListItem;

const BoxWrapper = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== "isTablet";
  },
})(({ theme, isTablet }) => {
  return {
    position: "relative",
    overflow: "hidden",
    height: isTablet ? "350px" : "600px",
    borderRadius: isTablet ? 5 : 24,
    cursor: "pointer",
    filter: "drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.15))",
  };
});

const BoxContent = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== "isTablet";
  },
})(({ theme, isTablet }) => {
  return {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: isTablet ? "150px" : "250px",
    backgroundColor: theme.palette.common.black,
    padding: isTablet ? theme.spacing(2) : theme.spacing(4),
  };
});

const BoxImage = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== "isTablet";
  },
})(({ theme, isTablet }) => {
  return {
    width: "100%",
    height: isTablet ? "200px" : "350px",
  };
});
