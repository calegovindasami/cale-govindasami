import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Bio } from "./components/Bio/Bio";
import BasicTabs from "./components/BasicTabs/BasicTabs";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <Bio></Bio>
        <BasicTabs />
      </main>
    </ThemeProvider>
  );
}

export default App;
