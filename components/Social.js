import { Stack } from "@mui/material";

import { Image } from "../hoc";
import { useSetting } from "../hooks";

const SIZE = 20;

const Social = () => {
  const { social_networks } = useSetting();

  return (
    <Stack direction={"row"} alignItems={"center"} spacing={1.5} position="relative">
      {social_networks.map((el, idx) => {
        const {
          value: { image, url },
        } = el;

        return (
          <a href={url} key={idx}>
            <Image src={image} alt="Trinix" width={SIZE} height={SIZE} />
          </a>
        );
      })}
    </Stack>
  );
};

export default Social;
