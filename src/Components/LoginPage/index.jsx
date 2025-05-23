import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useRef, useState } from "react";
import Button from "../ReusableComponents/Button";
import { useDispatch } from "react-redux";
import {
  signinUserAction,
} from "../Redux/ActionCreator/Action";
import Toaster from "../ReusableComponents/Toaster";
import TabButton from "../ReusableComponents/SwitchTabsButton";

const workerSignInDetails = {
  type:"worker",
  workerMail: "",
  workerPhone: "",
  workerPassword: "",
};

const employerSignInDetails = {
  type:"employer",
  employerMail: "",
  employerPhone: "",
  employerPassword:""
};

const tabs = ["Worker Login", "Employer Login"];
const loginOptionTab = ["Email", "Phone"];

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginOption, setLoginOption] = useState(loginOptionTab[0]);
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [workerLoginDetail, setWorkerLoginDetail] =
    useState(workerSignInDetails);
  const [employerLoginDetail, setEmployerLoginDetail] = useState(
    employerSignInDetails
  );
  const [showToaster, setShowToaster] = useState(false);
  const [toasterContent, setToasterContent] = useState("");
  const toasterTimer = useRef(null);


  const handleLogin = () => {
    if (currentTab === "Worker Login") {
      if (!workerLoginDetail.workerMail && !workerLoginDetail.workerPhone) {
        setShowToaster(true);
        setToasterContent("Please enter Email or Phone number");
        if (toasterTimer.current) clearTimeout(toasterTimer.current);
        toasterTimer.current = setTimeout(() => {
          setShowToaster(false);
        }, 3000);
      } else {
        dispatch(signinUserAction(workerLoginDetail));
      }
    } else if (currentTab === "Employer Login") {
      if (
        !employerLoginDetail.employerMail &&
        !employerLoginDetail.employerPhone
      ) {
        setShowToaster(true);
        setToasterContent("Please enter Email or Phone number");
        if (toasterTimer.current) clearTimeout(toasterTimer.current);
        toasterTimer.current = setTimeout(() => {
          setShowToaster(false);
        }, 3000);
      } else {
        dispatch(signinUserAction(employerLoginDetail));
      }
    }
  };

  const handleToaster = () => {
    setShowToaster(false);
  };

  const handleWorkerInput = (e) => {
    const { name, value } = e.target;
    setWorkerLoginDetail((p) => ({ ...p, [name]: value }));
  };

  const handleEmployerInput = (e) => {
    const { name, value } = e.target;
    setEmployerLoginDetail((p) => ({ ...p, [name]: value }));
  };

  const handleGoogleButton = (e) => {
    // if(currentTab==="Worker Login" ){
    //   navigate("/worker-dashboard")
    // }
    console.log("hii");
  };

  return (
    <div className="login-main-container">
      <div className="login-container">
        <TabButton
          tabs={tabs}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
        />
        <div className="login-content-container">
          <div className="worker-login-header">
            <span className="worker-login-title">
              {currentTab === "Worker Login"
                ? "Worker Login"
                : "Employer Login"}
            </span>
            <span className="worker-login-subtitle">
              {currentTab === "Worker Login"
                ? "Sign in to apply for jobs and manage your profile."
                : "Sign in to post jobs and manage your company profile."}
            </span>
          </div>

          <div className="login-content">
            <div className="login-google-button">
              <a href="http://localhost:2222/auth/google">
                {" "}
                <Button
                  className="google-button"
                  buttonName="Sign in with Google"
                  handleClick={handleGoogleButton}
                  preIcon={
                    <img
                      src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                      alt="google"
                    />
                  }
                />
              </a>
            </div>
            <div className="login-divider">
              <span className="login-divider-content">OR CONTINUE WITH</span>
            </div>
            <TabButton
              tabs={loginOptionTab}
              setCurrentTab={setLoginOption}
              currentTab={loginOption}
            />
            <div className="login-input-field">
              {loginOption === "Email" ? (
                <>
                  {currentTab === "Worker Login" ? (
                    <div className="login-input-container">
                      <div className="login-input-row">
                        <label htmlFor="mail">Email</label>
                        <input
                          type="text"
                          placeholder="name@example.com"
                          id="mail"
                          name="workerMail"
                          onChange={handleWorkerInput}
                          value={workerLoginDetail.workerMail}
                        />
                      </div>
                      <div className="login-input-row">
                        <label htmlFor="wpass">Password</label>
                        <input
                        id="wpass"
                          type="password"
                          placeholder="Enter the password"
                          name="workerPassword"
                          onChange={handleWorkerInput}
                          value={workerLoginDetail.workerPassword}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="login-input-container">
                      <div className="login-input-row">
                         <label htmlFor="mail">Email</label>
                      <input
                        type="text"
                        placeholder="company@example.com"
                        id="mail"
                        name="employerMail"
                        onChange={handleEmployerInput}
                        value={employerLoginDetail.employerMail}
                      />
                      </div>
                      <div className="login-input-row">
                     <label htmlFor="epass">Password</label>
                        <input
                        id="epass"
                          type="password"
                          placeholder="Enter the password"
                          name="employerPassword"
                          onChange={handleEmployerInput}
                          value={employerLoginDetail.employerPassword}
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {currentTab === "Worker Login" ? (
                    <div className="login-input-container">
                      <div className="login-input-row">
                         <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        placeholder="+91 9876543210"
                        id="phone"
                        name="workerPhone"
                        onChange={handleWorkerInput}
                        value={workerLoginDetail.workerPhone}
                      />
                      </div>
                       <div className="login-input-row">
                        <label htmlFor="wpass">Password</label>
                        <input
                        id="wpass"
                          type="password"
                          placeholder="Enter the password"
                          name="workerPassword"
                          onChange={handleWorkerInput}
                          value={workerLoginDetail.workerPassword}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="login-input-container">
                      <div className="login-input-row">
                         <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        placeholder="+91 9876543210"
                        id="phone"
                        name="employerPhone"
                        onChange={handleEmployerInput}
                        value={employerLoginDetail.employerMail}
                      />
                      </div>
                     <div className="login-input-row">
                        <label htmlFor="wpass">Password</label>
                        <input
                        id="wpass"
                          type="password"
                          placeholder="Enter the password"
                          name="workerPassword"
                          onChange={handleWorkerInput}
                          value={workerLoginDetail.workerPassword}
                        />
                      </div>
                    </div> 
                  )}
                </>
              )}
            </div>
            <Button
              className="primary"
              buttonName="Login"
              handleClick={handleLogin}
            />
          </div>
          <span className="login-footer">
            Don't have an account?{" "}
            <span
              className="sign-up-link"
              onClick={() =>
                navigate(
                  currentTab === "Employer Login"
                    ? "/employer-register"
                    : "/workersignup"
                )
              }
            >
              Sign up
            </span>
          </span>
        </div>
      </div>
      {showToaster && (
        <Toaster
          content={toasterContent}
          handleClick={handleToaster}
          className="error"
          type="Error"
        />
      )}
    </div>
  );
};

export default LoginPage;
