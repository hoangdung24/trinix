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
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { useSetting } from "../../../hooks";
import { Image } from "../../../hoc";
import Footer from "./Footer";

const PortfolioDetailDialog = ({ open, toggle, categoryMeta, ...props }) => {
  const { studio_logo } = useSetting();

  const { title, body } = props;

  return (
    <Dialog
      open={open}
      onClose={() => {
        toggle(false);
      }}
      fullScreen
    >
      <DialogTitle>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems="center">
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
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            padding: (theme) => {
              return theme.spacing(2, 3);
            },
          }}
        >
          {body.map((el, idx) => {
            const { block_type, value } = el;

            if (block_type === "richtext") {
              const { content, text_color } = value;

              return (
                <div
                  style={{
                    color: text_color,
                  }}
                  key={idx}
                  dangerouslySetInnerHTML={{
                    __html: createDOMPurify.sanitize(content),
                  }}
                ></div>
              );
            } else if (block_type === "images") {
              return (
                <Stack key={idx} direction="row">
                  {value.map((el, i) => {
                    return (
                      <Image
                        key={i}
                        src={el}
                        height={300}
                        width={`${100 / value.length}%`}
                        objectFit="cover"
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
        <Footer />
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
