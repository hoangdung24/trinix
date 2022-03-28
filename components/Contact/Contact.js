import { useMemo } from "react";

import { styled, Dialog as MuiDialog, DialogContent as MuiDialogContent } from "@mui/material";

import { LoadingData } from "../../hoc";

import { useDevice } from "../../hooks";

import ContactContent from "./ContactContent";

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
            width: isMediumDesktop ? "80vw" : "90vw",
            maxWidth: isMediumDesktop ? "80vw" : "90vw",
            maxHeight: isMediumDesktop ? "40vw" : "90vh",
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
        {children}
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
