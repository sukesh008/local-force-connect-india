import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import Button from "../ReusableComponents/Button";
import { useDispatch } from "react-redux";
import { signinWorkerAction } from "../Redux/ActionCreator/Action";

const workerSignInDetails = {
  workerMail: "",
  workerPhone: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [switchContainer, setSwitchContainer] = useState(false);
  const [loginOption, setLoginOption] = useState(false);
  const [workerDetail, setWorkerDetail] = useState(workerSignInDetails);

  const handleSendOTP = () => {
    dispatch(signinWorkerAction(workerDetail));
  };

  const handleWorkerInput = (e) => {
    const { name, value } = e.target;
    setWorkerDetail((p) => ({ ...p, [name]: value }));
  };

  console.log(workerDetail);

  return (
    <div className="login-main-container">
      <div className="login-container">
        <div className="login-switch">
          <span
            className={` worker-login-switch ${
              !switchContainer ? "active" : "non-active"
            } `}
            onClick={() => setSwitchContainer(false)}
          >
            Worker Login
          </span>
          <span
            className={` employer-login-switch ${
              switchContainer ? "active" : "non-active"
            } `}
            onClick={() => setSwitchContainer(true)}
          >
            Employer Login
          </span>
        </div>
        <div className="login-content-container">
          <div className="worker-login-header">
            <span className="worker-login-title">
              {!switchContainer ? "Worker Login" : "Employer Login"}
            </span>
            <span className="worker-login-subtitle">
              {!switchContainer
                ? "Sign in to apply for jobs and manage your profile."
                : "Sign in to post jobs and manage your company profile."}
            </span>
          </div>

          <div className="login-content">
            <Button
              className="google-button"
              buttonName="Sign in with Google"
              preIcon={
                <img
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt="google"
                />
              }
            />
            <div className="login-divider">
              <span className="login-divider-content">OR CONTINUE WITH</span>
            </div>
            <div className="login-options">
              <span
                className={` login-via-email ${
                  !loginOption ? "active" : "non-active"
                }`}
                onClick={() => setLoginOption(false)}
              >
                Email
              </span>
              <span
                className={` login-via-phone  ${
                  loginOption ? "active" : "non-active"
                }`}
                onClick={() => setLoginOption(true)}
              >
                Phone
              </span>
            </div>
            <div className="login-input-field">
              {!loginOption ? (
                <>
                  {!switchContainer ? (
                    <>
                      <label htmlFor="mail">Email</label>
                      <input
                        type="text"
                        placeholder="name@example.com"
                        id="mail"
                        name="workerMail"
                        onChange={handleWorkerInput}
                        value={workerDetail.workerMail}
                      />
                    </>
                  ) : (
                    <>
                      <label htmlFor="mail">Email</label>
                      <input
                        type="text"
                        placeholder="company@example.com"
                        id="mail"
                      />
                    </>
                  )}
                </>
              ) : (
                <>
                {
                  !switchContainer ?
                  <>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      placeholder="+91 9876543210"
                      id="phone"
                      name="workerPhone"
                      onChange={handleWorkerInput}
                      value={workerDetail.workerPhone}
                    />
                  </>
                  :
                  <>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      placeholder="+91 9876543210"
                      id="phone"
                    />
                  </>
                  }
                </>
              )}
            </div>
            <Button
              className="primary"
              buttonName="Send OTP"
              handleClick={handleSendOTP}
            />
          </div>
          <span className="login-footer">
            Don't have an account?{" "}
            <span
              className="sign-up-link"
              onClick={() =>
                navigate(
                  switchContainer ? "/employer-register" : "/wrokersignup"
                )
              }
            >
              Sign up
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
