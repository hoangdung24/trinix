import { styled, Backdrop, alpha } from "@mui/material";

const BackDropComponent = styled(Backdrop, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (props, styles) => {
    return styles.backdrop;
  },
})(({ theme }) => {
  return {
    backgroundColor: alpha(theme.palette.common.black, 0.5),
    backdropFilter: "blur(12px)",
  };
});

export default BackDropComponent;
