import { Fragment } from "react";

import { useSetting, useDevice } from "../hooks";
import { Box, Typography } from "@mui/material";

import { Image } from "../hoc";
import { Headline } from "../components";

const Metadata = ({ isSpecial, data, imageSrc }) => {
  const { gaming_logo } = useSetting();
  const { isMobile } = useDevice();

  return (
    <Fragment>
      {!!isSpecial && (
        <Fragment>
          <Box
            sx={[
              isMobile && {
                marginBottom: 6,
              },
            ]}
          >
            {gaming_logo && (
              <Image
                src={imageSrc || gaming_logo}
                width={!isMobile ? 600 : 300}
                height={!isMobile ? 300 : 150}
              />
            )}
          </Box>

          {!isMobile && (
            <Box
              sx={{
                width: "100%",
                height: 4,
                backgroundColor: "common.white",
                marginTop: 6,
                marginBottom: 2,
              }}
            />
          )}
        </Fragment>
      )}

      <Headline
        variant={!isMobile ? "h1" : "title1"}
        component={isMobile ? "p" : null}
        children={data.title}
        sx={{
          marginBottom: 4,
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "700",
        }}
      />
      <Typography
        variant="title1"
        component="p"
        sx={[
          {
            color: isSpecial ? "common.white" : "common.black",
            textAlign: "center",
            fontWeight: 700,
          },
          isMobile && {
            fontSize: 15,
            lineHeight: "18px",
          },
        ]}
        children={data.description}
      />
    </Fragment>
  );
};

export default Metadata;
