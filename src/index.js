import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    titles: "'Raleway', sans-serif",
    heading: "'Tangerine', cursive",
    mono: "'Lato', sans-serif",
  },
  colors: {
    back: "#f7f9f9",
    primary: "#7b9e87",
    secondary: "#b6be9c",
    secondaryL: "#d2d0ba",
    accent: "#011936",
    accentL: "#5e747f",
    accentP: "#e5c1bd",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
