import { createContext } from "react";

export type Themes = "light" | "dark";

export interface ThemeContextType {
  theme: Themes;
  setTheme: (theme: Themes) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
