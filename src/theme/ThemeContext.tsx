import { createContext, useContext, useState, ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { themes, ThemeName } from "./theme"

type ThemeContextType = {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const useThemeApp = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useThemeApp must be used inside ThemeProviderApp")
  return ctx
}

export function ThemeProviderApp({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>("orange")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}