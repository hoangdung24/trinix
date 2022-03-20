import {
  Box,
  styled,
  Typography,
  Grid,
  Stack,
  Dialog as MuiDialog,
  DialogContent as MuiDialogContent,
} from "@mui/material";
import { Image } from "../../hoc";
import { Button, Headline, Social } from "../../components";

const IMAGE_SRC = "/background2.png";

const SIZE = 20;

const Contact = ({ open, toggle, ...props }) => {
  return (
    <Dialog
      {...{
        open,
        onClose: () => {
          toggle(false);
        },
        PaperProps: {
          sx: {
            width: "75vw",
            maxWidth: "75vw",
            maxHeight: "80vh",
          },
        },
        ...props,
      }}
    >
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box>
                <Headline
                  variant="h1"
                  sx={{
                    marginBottom: 6,
                  }}
                >
                  Contact Us
                </Headline>

                <Wrapper>
                  <SubTitle variant="categoryBold">Address:</SubTitle>
                  <Text>158/20 Hoàng Hoa Thám, phường 12, quận Tân Bình</Text>
                </Wrapper>
                <Wrapper>
                  <SubTitle variant="categoryBold">Contact Info:</SubTitle>

                  <Text>Hotline: (+84) 989 743 598</Text>
                  <Text>Email: contact@trinix.studio</Text>
                </Wrapper>

                <Wrapper>
                  <SubTitle variant="categoryBold">Social Network:</SubTitle>
                  <Social />
                </Wrapper>

                <Box>
                  <Button
                    title="WORK WITH US"
                    isIcon={false}
                    isBackground={false}
                    sx={{
                      paddingLeft: 0,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={8}>
            <Image src={IMAGE_SRC} width="100%" height="600px" />
          </Grid>
        </Grid>
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

const SubTitle = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.common.white,
  };
});

const Text = styled(Typography)(({ theme }) => {
  return {
    color: "rgba(255, 255, 255, 0.65)",
    fontSize: "13px",
    fontWeight: "400",
  };
});

const Wrapper = styled(Box)(({ theme }) => {
  return {
    marginBottom: theme.spacing(6),
  };
});
