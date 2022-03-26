import { useCallback, useEffect } from "react";

import { Chip, Stack } from "@mui/material";

const Tag = ({ items, selectedItem, ...props }) => {
  const onClick = useCallback((data) => {
    return (e) => {
      props.onClick(e, data);
    };
  }, []);

  return (
    <Stack spacing={2} direction="row">
      {items.map((el) => {
        return (
          <Chip
            key={el}
            label={el}
            variant={selectedItem === el ? "filled" : "outlined"}
            clickable
            onClick={onClick(el)}
          />
        );
      })}
    </Stack>
  );
};

export default Tag;
