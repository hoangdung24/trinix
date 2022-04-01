import useSWR from "swr";
import dynamic from "next/dynamic";
import queryString from "query-string";
import { useRouter } from "next/router";
import { useToggle, useUpdateEffect } from "react-use";
import { useCallback, useState, useEffect } from "react";

import isEqual from "lodash/isEqual";

import { Box, Typography, Grid, Stack, Button } from "@mui/material";
import { GridContainer, LoadingIcon, ButtonShape } from "../../../components";
import { LoadingData } from "../../../hoc";

import { PAGES, BLOG_DETAIL } from "../../../api";

import TagList from "./TagList";
import BlogListItem from "./BlogListItem";

import { updatePathname, transformSearchParams } from "../../../libs";
import { useDevice } from "../../../hooks";
import { SEO } from "../../../hoc";

const DetailArticleDialog = dynamic(
  import("../../../components").then((Component) => {
    return Component.DetailArticleDialog;
  }),
  {
    loading: () => {
      return <LoadingIcon />;
    },
  }
);

const BlogList = ({ initBlogListPage, initTagList }) => {
  const router = useRouter();
  const [data, setData] = useState(initBlogListPage?.items);
  const [open, toggle] = useToggle(false);
  const [loading, setLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const [params, setParams] = useState({
    tags: null,
    page: null,
  });

  const { isMediumDesktop } = useDevice();

  useEffect(() => {
    let params = {};

    for (const key of Object.keys(router.query)) {
      if (router.query[key] !== "") {
        params[key] = router.query[key];
      }
    }

    if (!("page" in router.query)) {
      params["page"] = 1;
    } else {
      const page = Number(router.query.page);

      if (isNaN(page)) {
        params["page"] = 1;
      } else {
        if (page < 1) {
          params["page"] = 1;
        } else {
          params["page"] = page;
        }
      }
    }

    setParams(params);

    updatePathname({
      pathname: router.pathname,
      query: params,
    });
  }, []);

  const { data: resData, error } = useSWR(() => {
    if (params.page === null) {
      return null;
    }

    const stringifyParams = queryString.stringify(transformSearchParams(params));

    return `${PAGES}?type=${BLOG_DETAIL}&fields=*&${stringifyParams}`;
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

  const chooseHashtagHandler = useCallback((_, data) => {
    setParams((prev) => {
      if (prev.tags === data) {
        updatePathname({
          pathname: router.pathname,
          query: {
            tags: null,
          },
        });

        return {
          ...prev,
          tags: null,
        };
      } else {
        updatePathname({
          pathname: router.pathname,
          query: {
            tags: data,
          },
        });

        return {
          ...prev,
          tags: data,
        };
      }
    });
  }, []);

  const choosePostHandler = useCallback((_, data) => {
    toggle(true);
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
          <Stack direction="row" justifyContent={"space-between"} alignItems="center" marginY={6}>
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

            {Number(params.page) * Number(params?.limit || 20) <
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
              <TagList {...initTagList} selectedItem={params.tags} onClick={chooseHashtagHandler} />
            </Box>
          </Grid>
        )}
      </Grid>
    </GridContainer>
  );
};

export default BlogList;
