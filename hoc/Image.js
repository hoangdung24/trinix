import NextImage from "next/image";
import { Box } from "@mui/material";

const Image = ({ WrapperProps = {}, src, width, height, layout = "fill", ...props }) => {
  const loader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const { sx = {}, ...restWrapperProps } = WrapperProps;

  if (layout === "fill") {
    return (
      <Box
        sx={{
          ...{
            position: "relative",
            maxWidth: width,
            width,
            height,
          },
          ...sx,
        }}
        {...restWrapperProps}
      >
        <NextImage
          {...{
            src,
            layout,
            placeholder: "blur",
            objectFit: "contain",
            blurDataURL:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
            ...(layout !== "fill" && {
              layout,
              width,
              height,
            }),
            ...(src.includes("http") && {
              loader,
            }),
            ...props,
          }}
        />
      </Box>
    );
  } else {
    return (
      <NextImage
        {...{
          src,
          layout,
          placeholder: "blur",
          objectFit: "contain",
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
          width,
          height,
          ...(src.includes("http") && {
            loader,
          }),
          ...props,
        }}
      />
    );
  }
};

export default Image;
