import { styled, Backdrop, alpha } from "@mui/material";

const BackDropComponent = styled(Backdrop, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (props, styles) => {
    return styles.backdrop;
  },
})(({ theme }) => {
  return {
    backgroundColor: alpha(theme.palette.common.black, 0.6),
    // backdropFilter: "blur(6px)",
  };
});

export default BackDropComponent;
