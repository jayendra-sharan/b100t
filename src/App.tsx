import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <h1>Hello Beyond100Things</h1>
      </div>
    </ThemeProvider>
  )
}

export default App;
