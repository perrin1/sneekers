"use client";

import React, { ReactNode } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

interface Props extends ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children, ...props }) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemeProvider>
  );
};
