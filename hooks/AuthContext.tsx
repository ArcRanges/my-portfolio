import { createContext, useContext } from "react";

const AuthContext = createContext({} as any);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthContext must be used in a context");
  return context;
};

export default function AuthProvider({
  children,
  authState,
  setAuthState,
}: any) {
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

interface AuthState {
  authenticated: boolean;
  username: string;
}

export const initialAuthState = {
  authenticated: false,
  username: "",
};

export const authReducer = (state: AuthState, action: any) => {
  switch (action.type) {
    case "SET_AUTHENTICATED": {
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return {
        ...state,
        authenticated: action.payload.authenticated,
        username: action.payload.username ?? "",
      };
    }
    default:
      return state;
  }
};
