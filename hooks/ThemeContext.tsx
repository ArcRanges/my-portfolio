import { createContext, useContext } from "react";

export const THEME_COLORS = {
  sky: "sky",
  lime: "lime",
  orange: "orange",
};

export const initialThemeState = {
  selectedThemeColor: THEME_COLORS.sky,
};

const ThemeContext = createContext({} as any);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used in a context");
  return context;
};

export default function ThemeProvider({
  children,
  themeState = initialThemeState,
  setThemeState,
}: any) {
  return (
    <ThemeContext.Provider value={{ themeState, setThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const themeActions = {
  SET_THEME: "SET_THEME",
};

export const themeReducer = (state: any, action: any) => {
  switch (action.type) {
    case themeActions.SET_THEME: {
      const colour = action.payload;
      return {
        ...state,
        selectedThemeColor: colour,
        selectedThemeBgColor: colour,
      };
    }
  }
};
