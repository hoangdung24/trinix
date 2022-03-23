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

  const isMediumDesktop = useMediaQuery((theme) => {
    return theme.breakpoints.up("lg");
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    isMediumDesktop,
  };
};

export default useDevice;
