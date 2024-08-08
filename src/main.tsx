import { createRoot } from "react-dom/client";
import React from "react";
import { CssBaseline, ThemeProvider, theme } from "./styles";
import { App } from "./app";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense>
      <ThemeProvider theme={theme}>
        <CssBaseline /> <App />
      </ThemeProvider>
    </React.Suspense>
  </React.StrictMode>
);
