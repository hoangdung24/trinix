import React from "react";
import createDOMPurify from "dompurify";

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

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useSetting } from "../../../hooks";
import { Image } from "../../../hoc";

import { GridContainer, Footer2 as Footer } from "../../../components";
import { useDevice } from "../../../hooks";

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Fade
      ref={ref}
      {...props}
      timeout={{
        enter: 500,
        exit: 500,
      }}
    />
  );
});

const PortfolioDetailDialog = ({ open, toggle, categoryMeta, isSpecial, ...props }) => {
  const { studio_logo } = useSetting();
  const { title, body = [], background_color } = props;
  const { isMobile } = useDevice();

  return (
    <Dialog
      open={open}
      onClose={() => {
        toggle(false);
      }}
      fullScreen
      TransitionComponent={Transition}
      keepMounted
    >
      <DialogTitle>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems="center">
          {!isMobile && (
            <Stack direction={"row"} spacing={2}>
              <Image src={studio_logo} width={200} height={50} />
              <Stack>
                <Typography
                  variant="title2"
                  sx={{
                    textTransformz: "uppercase",
                  }}
                >
                  {title}
                </Typography>
                <Typography variant="category">{categoryMeta?.title}</Typography>
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
              <CloseIcon />
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
                color: isSpecial ? "common.white" : "common.black",
              }}
            >
              <Typography variant="h1">{title}</Typography>
              <Typography variant="category">{categoryMeta?.title}</Typography>
            </Stack>
          )}

          {body.map((el, idx) => {
            const { block_type, value } = el;

            if (block_type === "richtext") {
              const { content, text_color } = value;

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
                    }}
                    dangerouslySetInnerHTML={{
                      __html: createDOMPurify.sanitize(content),
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

                    // return (
                    //   <Image
                    //     key={idx}
                    //     src={el}
                    //     width={`${100 / value.length}%`}
                    //     layout="responsive"
                    //   />
                    // );

                    // let height = 300;

                    // return (
                    //   <Image
                    //     key={idx}
                    //     src={el}
                    //     width={`${100 / value.length}%`}
                    //     height={height}
                    //     objectFit="contain"
                    //     onLoadingComplete={({ naturalHeight, naturalWidth }) => {
                    //       console.log(this);

                    //       height = naturalHeight;
                    //     }}
                    //   />
                    // );
                  })}
                </Stack>
              );
            } else {
              return null;
            }
          })}
        </Box>
        <Footer isSpecial={isSpecial} />
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
