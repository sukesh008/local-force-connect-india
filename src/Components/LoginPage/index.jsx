import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useRef, useState } from "react";
import Button from "../ReusableComponents/Button";
import { useDispatch } from "react-redux";
import { signinEmployerAction, signinWorkerAction } from "../Redux/ActionCreator/Action";
import { UseAuth } from "../Auth";
import Toaster from "../ReusableComponents/Toaster";
import TabButton from "../ReusableComponents/SwitchTabsButton";

const workerSignInDetails = {
  workerMail: "",
  workerPhone: "",
};

const employerSignInDetails = {
  employerMail: "",
  employerPhone: "",
};

const tabs=["Worker Login","Employer Login"]
const loginOptionTab=["Email","Phone"]

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginOption, setLoginOption] = useState(loginOptionTab[0]);
  const [currentTab,setCurrentTab]=useState(tabs[0])
  const [workerLoginDetail, setWorkerLoginDetail] =
    useState(workerSignInDetails);
  const [employerLoginDetail, setEmployerLoginDetail] = useState(
    employerSignInDetails
  );
  const[showToaster,setShowToaster]=useState(false);
  const[toasterContent,setToasterContent]=useState("")
  const toasterTimer=useRef(null)

  

  const handleSendOTP = () => {
  if(currentTab==="Worker Login"){   
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
  else if(currentTab==="Employer Login"){   
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
    console.log("google-button")
    if(currentTab==="Worker Login"){
      navigate("/worker-dashboard")
    }
  }

  console.log(workerLoginDetail);

  return (
    <div className="login-main-container">
      <div className="login-container">
        <TabButton tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab}/>
        <div className="login-content-container">
          <div className="worker-login-header">
            <span className="worker-login-title">
              {currentTab==="Worker Login" ? "Worker Login" : "Employer Login"}
            </span>
            <span className="worker-login-subtitle">
              {currentTab==="Worker Login"
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
            <TabButton tabs={loginOptionTab} setCurrentTab={setLoginOption} currentTab={loginOption}/>
            <div className="login-input-field">
              {loginOption==="Email" ? (
                <>
                  {currentTab==="Worker Login" ? (
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
                  {currentTab==="Worker Login" ? (
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
                  currentTab==="Employer Login" ? "/employer-register" : "/workersignup"
                )
              }
            >
              Sign up
            </span>
          </span>
        </div>
      </div>
      {showToaster && <Toaster content={toasterContent} handleClick={handleToaster} className="error" type="Error"/>}
    </div>
  );
};

export default LoginPage;
