import { useCallback } from "react";
import DOMPurify from "isomorphic-dompurify";

import {
  Dialog,
  DialogContent as MuiDialogContent,
  DialogTitle as MuiDialogTitle,
  Box,
  Typography,
  styled,
  Stack,
  IconButton,
  Fade,
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
  const { title, body = [], background_color, subtitle } = props;
  const { isMobile } = useDevice();

  const closeHandler = useCallback(() => {
    toggle(false);
    setParams({
      id: null,
    });
  }, []);

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

          {body.map((el, idx) => {
            const { block_type, value } = el;

            if (block_type === "richtext") {
              const { content, text_color, text_alignment } = value;

              return (
                <GridContainer
                  key={idx}
                  OuterProps={[
                    isMobile && {
                      sx: {
                        maxWidth: 1,
                        paddingX: 0,
                      },
                    },
                  ]}
                >
                  <div
                    style={{
                      color: text_color,
                      textAlign: text_alignment,
                      wordWrap: "break-word",
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
                  ></div>
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
