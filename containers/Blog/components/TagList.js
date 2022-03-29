import { useCallback, useEffect } from "react";

import { Chip, Stack } from "@mui/material";

const Tag = ({ items, selectedItem, ...props }) => {
  const onClick = useCallback((data) => {
    return (e) => {
      props.onClick(e, data);
    };
  }, []);

  return (
    <Stack spacing={2} direction="row" flexWrap={"wrap"}>
      {items.map((el) => {
        return (
          <Chip
            key={el}
            label={el}
            variant={selectedItem === el ? "filled" : "outlined"}
            clickable
            onClick={onClick(el)}
            sx={{
              marginBottom: 1,
            }}
          />
        );
      })}
    </Stack>
  );
};

export default Tag;
