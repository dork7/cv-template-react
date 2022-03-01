import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import CV from "./CV";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CV />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
