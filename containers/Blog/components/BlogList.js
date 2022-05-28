import useSWR from "swr";
import queryString from "query-string";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useToggle, useUpdateEffect } from "react-use";

import isEqual from "lodash/isEqual";

import { Box, Typography, Grid, Stack } from "@mui/material";
import {
  GridContainer,
  LoadingIcon,
  ButtonShape,
  DetailArticleDialog,
} from "../../../components";
import { LoadingData } from "../../../hoc";

import { PAGES, BLOG_DETAIL } from "../../../api";

import TagList from "./TagList";
import BlogListItem from "./BlogListItem";

import { updatePathname, transformSearchParams } from "../../../libs";
import { useDevice, useParams } from "../../../hooks";
import { SEO } from "../../../hoc";

const BlogList = ({ initBlogListPage, initTagList, initDetailBlog }) => {
  const router = useRouter();
  const { isMediumDesktop } = useDevice();
  const [open, toggle] = useToggle(initDetailBlog ? true : false);
  const [loading, setLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState(initDetailBlog);
  const [data, setData] = useState(initBlogListPage?.items);
  const [params, setParams] = useParams({
    initState: {},
    excludeKeys: ["limit", "offset"],
  });

  const { data: resData, error } = useSWR(() => {
    if (params.page === null) {
      return null;
    }

    const stringifyParams = queryString.stringify({
      ...transformSearchParams(params),
      type: BLOG_DETAIL,
      fields: "*",
    });

    return `${PAGES}?${stringifyParams}`;
  });

  useUpdateEffect(() => {
    if (resData?.items?.length === 0 && data?.items?.length === 0) {
      setLoading(false);
    }

    if (isEqual(resData?.items, data)) {
      return;
    }
    setData(resData?.items);
    setLoading(false);
  }, [resData, data]);

  const chooseHashtagHandler = useCallback((_, data, params) => {
    const { tags } = params;
    if (tags === data) {
      setParams({
        tags: undefined,
      });
      return;
    } else {
      setParams({
        tags: data,
      });
    }
  });

  const choosePostHandler = useCallback((_, data) => {
    toggle(true);

    setParams({
      id: data.id,
    });

    setSelectedPost(data);
  }, []);

  return (
    <GridContainer
      OuterProps={{
        sx: {
          marginY: 5,
        },
      }}
    >
      {selectedPost && open && <SEO data={selectedPost.meta} />}

      <Grid container spacing={3}>
        <Grid item xs={12} lg={10}>
          <Grid container spacing={2}>
            <LoadingData
              data={data}
              error={error}
              loading={loading}
              choosePostHandler={choosePostHandler}
            >
              {({ data, loading, choosePostHandler }) => {
                return loading ? (
                  <LoadingIcon />
                ) : (
                  data.map((el) => {
                    return (
                      <Grid item xs={12} md={6} key={el.id}>
                        <BlogListItem {...el} choosePostHandler={choosePostHandler} />
                      </Grid>
                    );
                  })
                );
              }}
            </LoadingData>
          </Grid>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems="center"
            marginY={6}
          >
            {params.page > 1 ? (
              <ButtonShape
                title="BACK"
                position="left"
                onClick={() => {
                  updatePathname({
                    pathname: router.pathname,
                    query: {
                      page: Number(router.query.page) - 1,
                    },
                  });

                  setParams((prev) => {
                    if (prev.page === 1) {
                      return { ...prev };
                    } else {
                      return {
                        ...prev,
                        page: prev.page - 1,
                      };
                    }
                  });
                }}
                alwaysVisible
                useSolid
                TitleProps={{
                  color: "#000 !important",
                }}
              />
            ) : (
              <Box></Box>
            )}

            {Number(params.page) * Number(params?.limit || 8) <
              initBlogListPage?.meta?.total_count && (
              <ButtonShape
                title="MORE"
                position="right"
                onClick={() => {
                  updatePathname({
                    pathname: router.pathname,
                    query: {
                      page: Number(router.query.page) + 1,
                    },
                  });

                  setParams((prev) => {
                    return {
                      ...prev,
                      page: prev.page + 1,
                    };
                  });
                }}
                alwaysVisible
                useSolid
                TitleProps={{
                  color: "#000 !important",
                }}
              />
            )}
          </Stack>

          <DetailArticleDialog
            {...{
              open,
              toggle,
              selectedPost,
              setParams,
            }}
          />
        </Grid>

        {isMediumDesktop && (
          <Grid item lg={2}>
            <Box
              sx={{
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.25)",
                padding: (theme) => {
                  return theme.spacing(2);
                },
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box marginBottom={2}>
                <Typography variant="title2">Hashtag</Typography>
              </Box>
              <TagList
                {...initTagList}
                selectedItem={params.tags}
                onClick={chooseHashtagHandler}
                params={params}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </GridContainer>
  );
};

export default BlogList;
