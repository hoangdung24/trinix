import { useMediaQuery } from "@mui/material";

const useDevice = () => {
  const isMobile = useMediaQuery((theme) => {
    return theme.breakpoints.down("sm");
  });

  const isTablet = useMediaQuery((theme) => {
    return theme.breakpoints.down("md");
  });

  const isDesktop = useMediaQuery((theme) => {
    return theme.breakpoints.up("md");
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useDevice;
