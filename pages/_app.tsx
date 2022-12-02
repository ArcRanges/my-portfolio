import "../styles/globals.css";
import "../styles/background-effects.css";

import type { AppProps } from "next/app";
import { useReducer, useState } from "react";
import AuthProvider from "../hooks/AuthContext";
import Login from "../_pages/Login";
import BackgroundEffects from "../containers/BackgroundEffects";
import Navbar from "../components/Navbar";
import ThemePicker from "../components/ThemePicker";
import ThemeProvider, {
  initialThemeState,
  themeReducer,
} from "../hooks/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [theme, setTheme] = useReducer(themeReducer, initialThemeState);

  return (
    <div className="relative">
      <ThemeProvider themeState={theme} setThemeState={setTheme}>
        <AuthProvider
          authState={{ authenticated }}
          setAuthenticated={setAuthenticated}
        >
          <Navbar />
          <BackgroundEffects />
          {!authenticated ? <Login /> : <Component {...pageProps} />}
          <ThemePicker />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
