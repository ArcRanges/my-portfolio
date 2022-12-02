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
  setAuthenticated,
}: any) {
  return (
    <AuthContext.Provider value={{ authState, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
