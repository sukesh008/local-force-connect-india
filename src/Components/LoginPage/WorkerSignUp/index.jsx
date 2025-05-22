import {  MenuItem, Select } from "@mui/material";
import { useRef, useState } from "react";
import "./WorkerSignUp.css"
import Button from "../../ReusableComponents/Button";
import Toaster from "../../ReusableComponents/Toaster";
import DropFiles from "../../ReactDropZone/ReactDropZone";
import { useDispatch } from "react-redux";
import { signUpUserAction } from "../../Redux/ActionCreator/Action";


const details = {
  type:"worker",
  firstName: "",
  lastName: "",
  mail: "",
  password:"",
  confirmPassword:"",
  phone: "",
  city: "",
  state: "",
  skill: "",
  workExperience: "",
  education: "",
  certificate:""
};

const detailsError={
  passwordError:"",
  confirmPasswordError:"",
}

const WorkerSignUp = () => {

  const [workerDetail, setWorkerDetail] = useState(details);
  const [error,setError]=useState(detailsError)
  const [showToaster, setshowToaster] = useState(false);
  const [moveNextPage, setMoveNextPage] = useState(false);
  const toasterTimer = useRef(null);
   const dispatch=useDispatch()
  console.log(workerDetail);
  

  const handleInput = (e) => {
    const { name, value } = e.target;
    setWorkerDetail((p) => ({ ...p, [name]: value }));
    setError(p=>({...p,[name+"Error"]:""}))
  };

  const handleNext = ()=> {
    const { firstName, lastName, mail, phone, city, state,password, confirmPassword} = workerDetail;
    const hasError =
      !firstName || !lastName || !mail || !phone || !city || !state || !password || !confirmPassword;

      if(password){
          setError(P=>({passwordError:""}))
      }
      else{
        setError(p=>({...p,passwordError:"Password should be atleast minimum 8 characters"}))
      }

      if(confirmPassword){
          if(password===confirmPassword){
            setError(p=>({...p,confirmPasswordError:""}))
          }
          else{
            setError(p=>({...p,confirmPasswordError:"Confirm Password should be same as the password"}))
          }
      }
      else{
        setError(p=>({...p,confirmPasswordError:"Confirm Password should be same as the password"}))
      }
    

    if (hasError) {
      setshowToaster(true);
      setMoveNextPage(false);

      if (toasterTimer.current) clearTimeout(toasterTimer.current);
      toasterTimer.current = window.setTimeout(() => {
        setshowToaster(false);
      }, 3000);
    } else {
      setMoveNextPage(true);
    }
  };

  const handleRegistration = () => {
    const { skill, workExperience, education,certificate } = workerDetail;
    const hasError = !skill || !workExperience || !education || !certificate;

    if (hasError) {
      setshowToaster(true);
      if (toasterTimer.current) clearTimeout(toasterTimer.current);
      toasterTimer.current = window.setTimeout(() => {
        setshowToaster(false);
      }, 3000);
    }
    else{
       dispatch(signUpUserAction(workerDetail))
    }
  };

  const handleToasterClose = () => {
    setshowToaster(false);
  };

  return (
    <div className="worker-signup-main-container">
      <div className="worker-signup-container">
        <div className="worker-signup-header">
          <span className="worker-signup-title">Worker Registration</span>
          <span className="worker-signup-subtitle">
            Create your profile to apply for jobs
          </span>
        </div>
        <div className="worker-signup-content">
          <div className="worker-signup-tabs">
            <span
              className={`personal-details-tab ${
                !moveNextPage ? "active" : "non-active"
              }`}
            >
              Personal Details
            </span>
            <span
              className={`skills-tab ${moveNextPage ? "active" : "non-active"}`}
            >
              Skills & Experience
            </span>
          </div>

          <>
            {!moveNextPage ? (
              // worker sign-up first page
              <div className="worker-signup-first-page">
                <div className="signup-one-input-row">
                  <div className="input-field">
                    <label htmlFor="fname">
                      First Name <span className="input-important">*</span>
                    </label>
                    <input
                      id="fname"
                      type="text"
                      name="firstName"
                      onChange={handleInput}
                      value={workerDetail.firstName}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="lname">
                      Last Name <span className="input-important">*</span>
                    </label>
                    <input
                      id="lname"
                      type="text"
                      name="lastName"
                      onChange={handleInput}
                      value={workerDetail.lastName}
                    />
                  </div>
                </div>
                <div className="signup-one-input-row">
                  <div className="input-field">
                    <label htmlFor="mail">
                      Email <span className="input-important">*</span>
                    </label>
                    <input
                      id="mail"
                      type="text"
                      name="mail"
                      onChange={handleInput}
                      value={workerDetail.mail}
                    />
                  </div>
                </div>
                <div className="signup-one-input-row">
                  <div className="input-field">
                    <label htmlFor="pass">
                     Password <span className="input-important">*</span>
                    </label>
                    <input
                      id="pass"
                      type="password"
                      name="password"
                      onChange={handleInput}
                      value={workerDetail.password}
                    />
                    {error.passwordError && <span className="error-message">{error.passwordError}</span>}
                  </div>
                </div> 
                
                <div className="signup-one-input-row">
                  <div className="input-field">
                    <label htmlFor="cpass">
                     Confirm Password <span className="input-important">*</span>
                    </label>
                    <input
                      id="cpass"
                      type="password"
                      name="confirmPassword"
                      onChange={handleInput}
                      value={workerDetail.confirmPassword}
                    />
                    {error.confirmPasswordError && <span className="error-message">{error.confirmPasswordError}</span>} 
                  </div>
                </div>
                 
                <div className="signup-one-input-row">
                  <div className="input-field">
                    <label htmlFor="phone">
                      Phone Number <span className="input-important">*</span>
                    </label>
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      onChange={handleInput}
                      value={workerDetail.phone}
                    />
                  </div>
                </div>
                <div className="signup-one-input-row">
                  <div className="input-field">
                    <label htmlFor="city">
                      City <span className="input-important">*</span>
                    </label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      onChange={handleInput}
                      value={workerDetail.city}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="state">
                      State <span className="input-important">*</span>
                    </label>

                    <Select
                      id="state"
                      onChange={handleInput}
                      value={workerDetail.state}
                      displayEmpty
                      name="state"
                      className="select"
                      sx={{
                        height: 38,
                        display: "flex",
                        alignItems: "center",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--lighter-gray)",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "black",
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Select State
                      </MenuItem>
                      <MenuItem value="Maharastra">Maharastra</MenuItem>
                      <MenuItem value="Delhi">Delhi</MenuItem>
                      <MenuItem value="Karnataka">Karnataka</MenuItem>
                      <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                      <MenuItem value="Gujarat">Gujarat</MenuItem>
                    </Select>
                  </div>
                </div>
                <div className="signup-next-button">
                  <Button
                    buttonName="Next"
                    className="primary"
                    handleClick={handleNext}
                  />
                </div>
              </div>
            ) : (
              //  worker sign-up second page
              <div className="worker-signup-second-page">
                <div className="signup-two-input-row">
                  <label htmlFor="text">
                    Skills <span className="input-important">*</span>
                  </label>
                  <textarea
                    id="text"
                    placeholder="e.g., Electrician, Plumbing, Carpentery"
                    onChange={handleInput}
                    value={workerDetail.skill}
                    name="skill"
                  />
                </div>
                <div className="signup-two-input-row">
                  <label htmlFor="exp">Work Experience</label>
                  <Select
                    id="exp"
                    displayEmpty
                    name="workExperience"
                    onChange={handleInput}
                    value={workerDetail.workExperience}
                    sx={{
                      height: 38,
                      fontSize: 14,
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid var(--lighter-gray)",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "2px solid var(--black)",
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select experience level
                    </MenuItem>
                    <MenuItem value="Fresher (0-1 years)">
                      Fresher (0-1 years)
                    </MenuItem>
                    <MenuItem value="Junior (1-3 years)">
                      Junior (1-3 years)
                    </MenuItem>
                    <MenuItem value="Mid-leve (3-5 years)">
                      Mid-leve (3-5 years)
                    </MenuItem>
                    <MenuItem value="Senior (5+ years)">
                      Senior (5+ years)
                    </MenuItem>
                  </Select>
                </div>
                <div className="signup-two-input-row">
                  <label htmlFor="edu">Education</label>
                  <Select
                    id="edu"
                    displayEmpty
                    name="education"
                    onChange={handleInput}
                    value={workerDetail.education}
                    sx={{
                      height: 38,
                      fontSize: 14,
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid var(--lighter-gray)",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "2px solid var(--black)",
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select education level
                    </MenuItem>
                    <MenuItem value="Primary School">Primary School</MenuItem>
                    <MenuItem value="Secondary School">
                      Secondary School
                    </MenuItem>
                    <MenuItem value="ITI">ITI</MenuItem>
                    <MenuItem value="Diploma">Diploma</MenuItem>
                    <MenuItem value="Graduate">Graduate</MenuItem>
                  </Select>
                </div>
                <div className="signup-two-input-row">
                  <label htmlFor="fileData">Resume/CV</label>
                  <DropFiles accept=".pdf,.doc,.docx" setFileData={setWorkerDetail}/>
                  <span className="file-field">
                    Upload your resume in PDF or DOC format (Max: 2MB)
                  </span>
                </div>
                <div className="signup-two-buttons">
                  <Button
                    buttonName="Previous"
                    className="secondary"
                    handleClick={() => setMoveNextPage(false)}
                  />
                  <Button
                    buttonName="Complete Registration"
                    className="primary"
                    handleClick={handleRegistration}
                  />
                </div>
              </div>
            )}
          </>
        </div>
      </div>
      {showToaster && (
        <Toaster
          content="Please fill all required fields"
          handleClick={handleToasterClose}
          className="error"
          type="Error"
        />
      )}
    </div>
  );
};

export default WorkerSignUp;
