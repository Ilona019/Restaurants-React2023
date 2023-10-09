import React from "react";
import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/component";
import { ThemeProvider } from "./contexts/Theme";
import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  </React.StrictMode>
);
