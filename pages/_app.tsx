import "styles/animated-icons.css";
import "styles/background-effects.css";
import "styles/globals.css";

import Navbar from "components/Navbar";
import ThemePicker from "components/ThemePicker";
import BackgroundEffects from "containers/BackgroundEffects";
import AppProvider, {
  appStateReducer,
  initialAppState,
} from "hooks/AppContext";
import ThemeProvider, {
  initialThemeState,
  themeReducer,
} from "hooks/ThemeContext";
import type { AppProps } from "next/app";
import { useReducer } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [appState, setAppState] = useReducer(appStateReducer, initialAppState);
  const [theme, setTheme] = useReducer(themeReducer, initialThemeState);

  return (
    <div className="relative">
      <ThemeProvider themeState={theme} setThemeState={setTheme}>
        <AppProvider appState={appState} setAppState={setAppState}>
          {/* <Navbar /> */}
          <BackgroundEffects />
          <Component {...pageProps} />
          <ThemePicker />
        </AppProvider>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
