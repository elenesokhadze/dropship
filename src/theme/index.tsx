import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./palette";

export const StyledThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export * from "./palette";
