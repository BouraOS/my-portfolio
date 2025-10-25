import { Theme } from "@/components/ThemeProvider";
import { createContext } from "react";
interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeProviderContext = createContext<
  ThemeProviderState | undefined
>(undefined);
