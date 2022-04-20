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
  Button,
} from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useSetting, useDevice } from "../../hooks";
import { Image } from "../../hoc";

import { GridContainer, Footer2 as Footer, Headline, Backdrop } from "../../components";

const PortfolioDetailDialog = ({ open, toggle, selectedPost, ...props }) => {
  const { studio_logo } = useSetting();
  const { isMobile } = useDevice();

  if (selectedPost === null) {
    return null;
  }

  const { title, tags, background_color, body } = selectedPost;

  return (
    <Dialog
      open={open}
      onClose={() => {
        toggle(false);
      }}
      fullScreen={isMobile}
      PaperProps={{
        sx: [
          !isMobile && {
            maxWidth: "90vw",
            minWidth: "90vw",
          },
        ],
      }}
      BackdropComponent={Backdrop}
    >
      <DialogTitle>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems="center">
          {!isMobile && (
            <Stack direction={"row"} spacing={2}>
              {studio_logo && <Image src={studio_logo} width={200} height={50} />}

              <Stack>
                <Box marginBottom={0.5}>
                  <Typography
                    variant="title2"
                    sx={{
                      textTransformz: "uppercase",
                    }}
                  >
                    {title}
                  </Typography>
                </Box>

                <Stack direction="row" spacing={1}>
                  {tags.map((el, idx) => {
                    return (
                      <Headline key={idx} variant="category">
                        {el}
                      </Headline>
                    );
                  })}
                </Stack>
              </Stack>
            </Stack>
          )}
          {!isMobile ? (
            <IconButton
              sx={{
                color: "common.white",
              }}
              onClick={() => {
                toggle(false);
              }}
            >
              <Image src="/close.svg" width="30px" height="35px" />
            </IconButton>
          ) : (
            <Button
              sx={{
                color: "common.white",
              }}
              onClick={() => {
                toggle(false);
              }}
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
                textAlign: "center",
              }}
            >
              <Typography variant="h2">{title}</Typography>
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
                      __html: DOMPurify.sanitize(content),
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
        <Footer isSpecial={false} />
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
