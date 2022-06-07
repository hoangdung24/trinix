import { useMeasure } from "react-use";
import { extract } from "oembed-parser";
import DOMPurify from "isomorphic-dompurify";
import { useCallback, useState, useEffect } from "react";

import {
  Dialog,
  DialogContent as MuiDialogContent,
  DialogTitle as MuiDialogTitle,
  Box,
  Typography,
  styled,
  Stack,
  IconButton,
  Button,
} from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useSetting } from "../../../hooks";
import { Image } from "../../../hoc";

import { GridContainer, Footer2 as Footer } from "../../../components";
import { useDevice } from "../../../hooks";

const PortfolioDetailDialog = ({
  open,
  toggle,
  categoryMeta,
  isSpecial,
  setParams,
  ...props
}) => {
  const { studio_logo } = useSetting();

  const { title, body, background_color, subtitle } = props;

  const [ref, { width: containerWidth }] = useMeasure();

  const [transformedBody, setTransformedBody] = useState(() => {
    if (!body) {
      return undefined;
    }

    return body;
  });

  const { isMobile } = useDevice();

  const closeHandler = useCallback(() => {
    toggle(false);
    setParams({
      id: null,
    });
  }, []);

  useEffect(() => {
    (async () => {
      if (!body) {
        return;
      }

      const result = await Promise.all(
        body.map(async (el) => {
          const { block_type, isParsed, value } = el;

          if (block_type === "embed") {
            if (isParsed) {
              return el;
            }

            const parsedData = await extract(value.src).then((oembed) => {
              const { html } = oembed;

              return {
                ...el,
                html,
                isParsed: true,
              };
            });

            return parsedData;
          } else {
            return el;
          }
        })
      );

      setTransformedBody(result);
    })();
  }, [body]);

  return (
    <Dialog
      open={open}
      onClose={closeHandler}
      fullScreen={isMobile}
      PaperProps={{
        sx: [
          !isMobile && {
            maxWidth: "90vw",
            minWidth: "90vw",
          },
        ],
      }}
      keepMounted
    >
      <DialogTitle>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems="center">
          {!isMobile && (
            <Stack direction={"row"} spacing={2}>
              {studio_logo && <Image src={studio_logo} width={200} height={50} />}

              <Stack>
                <Typography
                  variant="title2"
                  sx={{
                    textTransformz: "uppercase",
                  }}
                >
                  {title}
                </Typography>
                <Typography variant="category">{subtitle}</Typography>
              </Stack>
            </Stack>
          )}
          {!isMobile ? (
            <IconButton
              sx={{
                color: "common.white",
              }}
              onClick={closeHandler}
            >
              <Image src="/close.svg" width="30px" height="35px" />
            </IconButton>
          ) : (
            <Button
              sx={{
                color: "common.white",
              }}
              onClick={closeHandler}
              startIcon={<ArrowBackIosIcon />}
            >
              Back
            </Button>
          )}
        </Stack>
      </DialogTitle>
      <DialogContent
        sx={{
          backgroundColor: background_color,
          wordBreak: "break-word",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          ref={ref}
          sx={{
            padding: (theme) => {
              return theme.spacing(2, 3);
            },
            flexGrow: "1",
          }}
        >
          {isMobile && (
            <Stack
              alignItems="center"
              sx={{
                color: "common.white",
                color: isSpecial ? "common.white" : "common.black",
              }}
            >
              <Typography variant="h1">{title}</Typography>
              <Typography variant="category">{subtitle}</Typography>
            </Stack>
          )}

          {transformedBody &&
            transformedBody.map((el, idx) => {
              const { block_type, value } = el;

              if (block_type === "richtext") {
                const { content, text_color, text_alignment } = value;

                return (
                  <GridContainer
                    key={idx}
                    OuterProps={{
                      ...(isMobile && {
                        sx: {
                          maxWidth: 1,
                          paddingX: 0,
                        },
                      }),
                    }}
                  >
                    <Box
                      sx={{
                        color: text_color,
                        textAlign: text_alignment,
                        wordWrap: "break-word",
                        ["& iframe"]: {
                          width: "100%",
                        },
                      }}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content, {
                          ADD_TAGS: ["iframe"],
                          ADD_ATTR: [
                            "allow",
                            "allowfullscreen",
                            "frameborder",
                            "scrolling",
                          ],
                        }),
                      }}
                    ></Box>
                  </GridContainer>
                );
              } else if (block_type === "images") {
                return (
                  <Stack key={idx} direction="row">
                    {value.map((el, idx) => {
                      return (
                        <img
                          key={idx}
                          src={el}
                          style={{
                            width: `${100 / value.length}%`,
                            objectFit: "contain",
                          }}
                        />
                      );
                    })}
                  </Stack>
                );
              } else if (block_type === "embed") {
                const { width, height } = value;

                if (el.html) {
                  return (
                    <Box
                      sx={{
                        ["& iframe"]: {
                          width: `${width}px`,
                          height: `${height}px`,
                          maxWidth: `${containerWidth}px`,
                          maxHeight: `${(containerWidth * height) / width}px`,
                        },
                      }}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(el.html, {
                          ADD_TAGS: ["iframe"],
                          ADD_ATTR: [
                            "allow",
                            "allowfullscreen",
                            "frameborder",
                            "scrolling",
                          ],
                        }),
                      }}
                    ></Box>
                  );
                } else {
                  return null;
                }
              } else {
                return null;
              }
            })}
        </Box>
        <Footer isSpecial={isSpecial} isPowerBy={false} />
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioDetailDialog;

const DialogTitle = styled(MuiDialogTitle)(({ theme }) => {
  return {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  };
});

const DialogContent = styled(MuiDialogContent)(({ theme }) => {
  return {
    padding: "0px",
  };
});
