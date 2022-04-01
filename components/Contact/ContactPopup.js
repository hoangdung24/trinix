import { useMemo, Fragment } from "react";

import {
  styled,
  Dialog as MuiDialog,
  DialogContent as MuiDialogContent,
  Box,
  IconButton,
} from "@mui/material";

import { LoadingData } from "../../hoc";

import { useDevice } from "../../hooks";

import ContactContent from "./ContactContent";

import { Image } from "../../hoc";

const Contact = ({ open, toggle, data, error, passHandler, ...props }) => {
  const { isMediumDesktop } = useDevice();

  const children = useMemo(() => {
    return (
      <LoadingData data={data} error={error}>
        {({ data }) => {
          return <ContactContent data={data} />;
        }}
      </LoadingData>
    );
  });

  return (
    <Dialog
      {...{
        open,
        onClose: () => {
          toggle(false);
        },
        PaperProps: {
          sx: {
            minWidth: "fit-content",
            width: "fit-content",
            // maxWidth: "calc(90vh * 1532 / 766)",
            maxHeight: "90vh",
            margin: 0,
          },
        },
        ...props,
      }}
    >
      <DialogContent
        sx={{
          overflowX: "hidden",
          ...(!isMediumDesktop && {
            padding: 0,
          }),
        }}
      >
        <Fragment>
          {children}
          <Box
            sx={[
              {
                position: "absolute",
                top: "5px",
                right: "5px",
              },
            ]}
          >
            <IconButton
              onClick={() => {
                toggle(false);
              }}
            >
              <Image src={"/close.svg"} width="30px" height="35px" />
            </IconButton>
          </Box>
        </Fragment>
      </DialogContent>
    </Dialog>
  );
};

export default Contact;

const Dialog = styled(MuiDialog)(({ theme }) => {
  return {};
});

const DialogContent = styled(MuiDialogContent)(({ theme }) => {
  return {
    background: theme.palette.common.black,
  };
});
