import { createContext, useContext } from "react";

export const THEME_COLORS = {
  sky: "sky",
  lime: "lime",
  orange: "orange",
};

export const THEME_COLORS_HEX = {
  [THEME_COLORS.sky]: "#0EA5E9",
  [THEME_COLORS.lime]: "#84CC16",
  [THEME_COLORS.orange]: "#F97316",
};

export const initialThemeState = {
  themeColor: THEME_COLORS.orange,
  themeColorSecondary: THEME_COLORS.sky,
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
      const themeColorHex = THEME_COLORS_HEX[colour];

      switch (colour) {
        case THEME_COLORS.sky:
          return {
            themeColorHex,
            themeColor: colour,
            themeColorSecondary: THEME_COLORS.orange,
          };
        case THEME_COLORS.orange:
          return {
            themeColorHex,
            themeColor: colour,
            themeColorSecondary: THEME_COLORS.sky,
          };
        case THEME_COLORS.lime:
          return {
            themeColorHex,
            themeColor: colour,
            themeColorSecondary: THEME_COLORS.lime,
          };
      }
      return {
        ...state,
      };
    }
  }
};
