import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const fontFamily = [
  "Montserrat",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

const factoryFont = (fontSize, lineHeight, fontWeight) => {
  return {
    fontFamily,
    fontSize,
    lineHeight,
    fontWeight,
  };
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#011021",
      light: "#D8E8FA",
    },
    secondary: {
      main: "#FF8900",
      light: "#FFE9D0",
    },
  },
  typography: {
    fontFamily,
    h1: {
      fontSize: "80pt",
      lineHeight: "97px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "40pt",
      lineHeight: "49px",
      fontWeight: 700,
    },
    title1: factoryFont("40pt", "49px", 500),
    title2: factoryFont("20pt", "24px", 500),
    category: factoryFont("16pt", "19px", 400),
    categoryBold: factoryFont("16pt", "19px", 700),
    bodyText: factoryFont("14px", "17.1px", 400),
    bodyTextBold: factoryFont("14px", "17.1px", 700),
    caption: {
      fontSize: "8pt",
      lineHeight: "10px",
    },
  },
});

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

//  add new
