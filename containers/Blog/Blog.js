import { Fragment } from "react";

import { Typography, Box } from "@mui/material";

import Banner from "./components/Banner";
import BlogList from "./components/BlogList";

import { useDevice } from "../../hooks";
import { SEO } from "../../hoc";

const Blog = ({ initData }) => {
  const [initBlogPage, initBlogListPage, initTagList, initDetailBlog] = initData;

  const { isMobile } = useDevice();

  const { items } = initBlogPage;
  const imageSrc = items?.[0]?.banner;

  return (
    <Fragment>
      <SEO data={items?.[0]?.meta} />
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
      <BlogList
        initBlogListPage={initBlogListPage}
        initTagList={initTagList}
        initDetailBlog={initDetailBlog}
      />
    </Fragment>
  );
};

export default Blog;
