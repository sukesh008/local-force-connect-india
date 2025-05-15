import { createContext, useContext } from "react";

const AuthContext = createContext();
export const UseAuth = ()=> useContext(AuthContext);

const AuthData = ({ children }) => {
  const isLoggedIn =JSON.parse( localStorage.getItem("isLoggedIn"))

  return <AuthContext.Provider value={{ isLoggedIn }}>{children}</AuthContext.Provider>;
};

export default AuthData;
