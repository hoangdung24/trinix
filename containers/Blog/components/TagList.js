import { useCallback } from "react";

import { Chip, Stack } from "@mui/material";

const Tag = ({ params, items, selectedItem, ...props }) => {
  const onClick = useCallback((data, params) => {
    return (e) => {
      props.onClick(e, data, params);
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
            onClick={onClick(el, params)}
            sx={{
              marginBottom: "8px !important",
            }}
          />
        );
      })}
    </Stack>
  );
};

export default Tag;
