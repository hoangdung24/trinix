import { useEffect } from "react";
import { useRouter } from "next/router";

import { Box } from "@mui/material";
import { useDevice } from "../../hooks";
import { ContactContent } from "../../components";

const Contact = ({ initContactPage }) => {
  const router = useRouter();

  const { isDesktop } = useDevice();

  useEffect(() => {
    if (isDesktop) {
      router.push("/");
    }
  }, [isDesktop]);

  return (
    <Box
      sx={{
        backgroundColor: "common.black",
      }}
    >
      <ContactContent
        {...{
          data: initContactPage,
        }}
      />
    </Box>
  );
};

export default Contact;
