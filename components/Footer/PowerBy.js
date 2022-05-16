import { Box } from "@mui/material";

import { Headline } from "../../components";

import { Link } from "../../hoc";

const PowerBy = () => {
  return (
    <Box>
      <Link
        href="https://t-solution.vn/"
        underline="none"
        sx={{
          color: "#FFF",
          fontSize: 14,
        }}
      >
        Powered by{" "}
        <Headline
          sx={{
            fontWeight: "700",
            fontSize: 14,
            display: "inline-block",
          }}
          children={"T-Solution"}
        />
      </Link>
    </Box>
  );
};

export default PowerBy;
