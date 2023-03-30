import { createContext, useContext } from "react";

const AppContext = createContext({} as any);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used in a context");
  return context;
};

export default function AppProvider({ children, appState, setAppState }: any) {
  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
}

interface AppState {
  currentMenu: string;
}

export const initialAppState = {
  currentMenu: "home",
};

export const appStateReducer = (state: AppState, action: any): AppState => {
  switch (action.type) {
    case "SET_MENU":
      return { ...state, currentMenu: action.payload };
    default:
      return state;
  }
};
