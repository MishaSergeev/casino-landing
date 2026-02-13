import LandingPage from "../pages/LandingPage/LandingPage";
import { ThemeProviderApp } from "../theme";

export default function App() {
  return (
    <ThemeProviderApp>
      <LandingPage />
    </ThemeProviderApp>
  );
}