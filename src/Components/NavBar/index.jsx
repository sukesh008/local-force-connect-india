import { useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css"
import { path } from "./NavPaths";
import Button from "../ReusableComponents/Button";
import { ExitToApp, LoginOutlined } from "@mui/icons-material";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <div className="navbar-container">
      <span className="navbar-company-header" onClick={() => navigate("/")}>
        LocalBlueForce
      </span>
      <div className="navbar-pages">
        <>
          {path.map((data, index) => {
            return (
              <span
                onClick={() => navigate(data.routePath)}
                className={
                  location.pathname === data.routePath ? "active" : "non-active"
                }
                key={index}
              >
                {data.name}
              </span>
            );
          })}
        </>
        <div className="navbar-buttons">
          <Button
            buttonName="Login"
            preIcon={
              <LoginOutlined/>
            }
            className="login-secondary"
            handleClick={() => navigate("/login")}
          />
          <Button
            buttonName="Post a Job"
            className="primary"
            handleClick={() => navigate("/post-job")}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
