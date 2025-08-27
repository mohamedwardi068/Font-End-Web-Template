import { ThemeProvider } from "@material-tailwind/react";
import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DarkModeProvider } from "./context/darkMode";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap everything with BrowserRouter */}
      <DarkModeProvider>
        <AuthProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </AuthProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);