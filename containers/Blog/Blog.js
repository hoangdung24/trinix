import { Fragment } from "react";

import { Typography, Box } from "@mui/material";

import Banner from "./components/Banner";
import BlogList from "./components/BlogList";

import { useDevice } from "../../hooks";

const Blog = ({ initBlogPage, initBlogListPage, initTagList }) => {
  const { isMobile } = useDevice();

  const { items } = initBlogPage;
  const imageSrc = items?.[0]?.banner;

  return (
    <Fragment>
      {!isMobile ? (
        <Banner imageSrc={imageSrc} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginY: 5,
          }}
        >
          <Typography variant="title1" fontWeight={700}>
            BLOG
          </Typography>
        </Box>
      )}
      <BlogList initBlogListPage={initBlogListPage} initTagList={initTagList} />
    </Fragment>
  );
};

export default Blog;
