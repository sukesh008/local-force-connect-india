import { Navigate } from "react-router-dom";
import { UseAuth } from ".";

const RequiredAuth = ({children}) => {
  const auth = UseAuth();
  console.log(auth.isLoggedIn);

return !auth.isLoggedIn ? <Navigate to="/login" /> : children


};

export default RequiredAuth;
