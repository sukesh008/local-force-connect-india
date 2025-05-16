import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useRef, useState } from "react";
import Button from "../ReusableComponents/Button";
import { useDispatch } from "react-redux";
import { signinEmployerAction, signinWorkerAction } from "../Redux/ActionCreator/Action";
import { UseAuth } from "../Auth";
import Toaster from "../ReusableComponents/Toaster";

const workerSignInDetails = {
  workerMail: "",
  workerPhone: "",
};

const employerSignInDetails = {
  employerMail: "",
  employerPhone: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [switchContainer, setSwitchContainer] = useState(false);
  const [loginOption, setLoginOption] = useState(false);
  const [workerLoginDetail, setWorkerLoginDetail] =
    useState(workerSignInDetails);
  const [employerLoginDetail, setEmployerLoginDetail] = useState(
    employerSignInDetails
  );
  const[showToaster,setShowToaster]=useState(false);
  const[toasterContent,setToasterContent]=useState("")
  const toasterTimer=useRef(null)
  

  const handleSendOTP = () => {
  if(!switchContainer){   
    if(!workerLoginDetail.workerMail && !workerLoginDetail.workerPhone){ 
              setShowToaster(true)
              setToasterContent("Please enter Email or Phone number")
              if(toasterTimer.current) clearTimeout(toasterTimer.current)
              toasterTimer.current=setTimeout(()=>{
            setShowToaster(false)
            },3000)
    }
    else{
      dispatch(signinWorkerAction(workerLoginDetail));
    }
  }
  else if(switchContainer){   
    if(!employerLoginDetail.employerMail && !employerLoginDetail.employerPhone){ 
              setShowToaster(true)
              setToasterContent("Please enter Email or Phone number")
              if(toasterTimer.current) clearTimeout(toasterTimer.current)
              toasterTimer.current=setTimeout(()=>{
            setShowToaster(false)
            },3000)
    }
    else{
      dispatch(signinEmployerAction(employerLoginDetail));
    }
  };
}

  const handleToaster=()=>{
    setShowToaster(false)
  }

  const handleWorkerInput = (e) => {
    const { name, value } = e.target;
    setWorkerLoginDetail((p) => ({ ...p, [name]: value }));
  };

  const handleEmployerInput = (e) => {
    const { name, value } = e.target;
    setEmployerLoginDetail((p) => ({ ...p, [name]: value }));
  };

  const handleGoogleButton=(e)=>{
    console.log("hii")
  }

  console.log(workerLoginDetail);

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
              handleClick={handleGoogleButton}
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
                        value={workerLoginDetail.workerMail}
                      />
                    </>
                  ) : (
                    <>
                      <label htmlFor="mail">Email</label>
                      <input
                        type="text"
                        placeholder="company@example.com"
                        id="mail"
                        name="employerMail"
                        onChange={handleEmployerInput}
                        value={employerLoginDetail.employerMail}
                      />
                    </>
                  )}
                </>
              ) : (
                <>
                  {!switchContainer ? (
                    <>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        placeholder="+91 9876543210"
                        id="phone"
                        name="workerPhone"
                        onChange={handleWorkerInput}
                        value={workerLoginDetail.workerPhone}
                      />
                    </>
                  ) : (
                    <>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        placeholder="+91 9876543210"
                        id="phone"
                        name="employerPhone"
                        onChange={handleEmployerInput}
                        value={employerLoginDetail.employerMail}
                      />
                    </>
                  )}
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
      {showToaster && <Toaster content={toasterContent} handleClick={handleToaster}/>}
    </div>
  );
};

export default LoginPage;
