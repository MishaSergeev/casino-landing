import LandingPage from "../pages/LandingPage/LandingPage"
import { ThemeProviderApp } from "./ThemeContext"

export default function App() {
  return (
    <ThemeProviderApp>
      <LandingPage />
    </ThemeProviderApp>
  )
}
