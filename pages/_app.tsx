import "styles/globals.css";
import "styles/background-effects.css";

import type { AppProps } from "next/app";
import { useEffect, useReducer, useState } from "react";
import AuthProvider, { authReducer, initialAuthState } from "hooks/AuthContext";
import Login from "_pages/Login";
import BackgroundEffects from "containers/BackgroundEffects";
import Navbar from "components/Navbar";
import ThemePicker from "components/ThemePicker";
import ThemeProvider, {
  initialThemeState,
  themeReducer,
} from "hooks/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [authState, setAuthState] = useReducer(authReducer, initialAuthState);
  const [theme, setTheme] = useReducer(themeReducer, initialThemeState);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const _authState = localStorage.getItem("auth");
  //     setAuthState({
  //       type: "SET_AUTHENTICATED",
  //       payload: JSON.parse(_authState ?? "{}"),
  //     });
  //   }
  // }, []);

  return (
    <div className="relative">
      <ThemeProvider themeState={theme} setThemeState={setTheme}>
        <AuthProvider authState={authState} setAuthState={setAuthState}>
          {/* <Navbar /> */}
          <BackgroundEffects />
          {/* {!authState.authenticated ? <Login /> : <Component {...pageProps} />} */}
          <Component {...pageProps} />
          <ThemePicker />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
