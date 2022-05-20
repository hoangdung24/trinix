import { useEffect } from "react";
import { useRouter } from "next/router";

import { Box } from "@mui/material";
import { useDevice } from "../../hooks";
import { ContactContent } from "../../components";
import { SEO } from "../../hoc";

const Contact = ({ initData }) => {
  const [initContactPage] = initData;

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
      <SEO data={initContactPage?.items?.[0]?.meta} />
      <ContactContent
        {...{
          data: initContactPage,
        }}
      />
    </Box>
  );
};

export default Contact;
