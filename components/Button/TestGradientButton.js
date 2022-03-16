import React from "react";
import Box from "@mui/material/Box";

const TestGradientButton = () => {
  return (
    <Box>
      <Box
        className="gradient-box"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          margin: "auto",
          maxWidth: "22em",
          position: "relative",
          padding: "24px",
          boxSizing: "border-box",
          color: "#FFF",
          background: "#000",
          backgroundClip: "padding-box",

          borderRadius: "1em",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            margin: "-5px",
            borderRadius: "inherit",
            background: "linear-gradient(to right, red, orange)",
          },
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum, lorem vel
          tincidunt imperdiet, nibh elit laoreet felis, a bibendum nisl tortor
        </p>
      </Box>
    </Box>
  );
};

export default TestGradientButton;
