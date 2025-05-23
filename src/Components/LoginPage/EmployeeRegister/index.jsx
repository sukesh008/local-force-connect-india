import { useRef, useState } from "react";
import "./EmployeeRegister.css"
import Button from "../../ReusableComponents/Button";
import Toaster from "../../ReusableComponents/Toaster";
import { useDispatch } from "react-redux";
import { signUpUserAction } from "../../Redux/ActionCreator/Action";
import DropFiles from "../../ReactDropZone/ReactDropZone";





const employerDetails = {
  type:"employer",
  companyName: "",
  contact: "",
  phone: "",
  email: "",
  password:"",
  confirmPassword:"",
  aadhar: "",
  pan: "",
  city: "",
  state: "",
  website: "",
  address: "",
  description: "",
  certificate:"",
  terms:false
};

const employerDetailsError = {
  companyNameError: "",
  contactError: "",
  phoneError: "",
  emailError: "",
  aadharError: "",
  panError: "",
  cityError: "",
  stateError: "",
  passwordError:"",
  confirmPasswordError:"",
};


const EmployeeRegister = () => {
  const [details, setDetails] = useState(employerDetails);
  const [detailsError, setDetailsError] =useState(employerDetailsError);
  const [showToaster,setShowToaster]=useState(false)
   const toasterTimer=useRef(null);
   const dispatch=useDispatch();
  console.log(details);

  const handleInput = (e)=> {
    const { name, value } = e.target;
    if(name==="terms"){
      setDetails(p=>({...p,terms:!details.terms}))
    }
    else{
      setDetails((p) => ({ ...p, [name]: value }));
    }
     setDetailsError(p=>({...p,[name+"Error"]:""}));
  };

  const handleValidation = () => {
    const { companyName, contact, phone, email, aadhar, pan, city, state ,password,confirmPassword} =
      details;
      const hasError= !companyName || !contact || !phone || !email || !aadhar || !pan || !city || !state || !password || !confirmPassword

      if(hasError){
      setShowToaster(true)
      if(toasterTimer.current) clearTimeout(toasterTimer.current)
      toasterTimer.current= setTimeout(()=>{ 
          setShowToaster(false)
      },3000)
      }
      else{
        dispatch(signUpUserAction(details))
      }
    
    if (companyName) {
      if (isAlphabet(companyName) && companyName.length >= 3) {
        setDetailsError((p) => ({ ...p, companyNameError: "" }));
      } else {
        setDetailsError((p) => ({
          ...p,
          companyNameError: "Company name must be at least 2 characters",
        }));
      }
    } else {
      setDetailsError((p) => ({
        ...p,
        companyNameError: "Company name must be at least 2 characters",
      }));
    }

    if (contact) {
      if (isAlphabet(contact) && contact.length >= 3) {
        setDetailsError((p) => ({ ...p, contactError: "" }));
      } else {
        setDetailsError((p) => ({
          ...p,
          contactError: "Company name must be at least 2 characters",
        }));
      }
    } else {
      setDetailsError((p) => ({
        ...p,
        contactError: "Contact person must be at least 2 characters",
      }));
    }

    if (phone) {
      if (isNumber(phone) && isValidNumber(phone)) {
        setDetailsError((p) => ({ ...p, phoneError: "" }));
      } else {
        setDetailsError((p) => ({
          ...p,
          phoneError: "Please enter a valid phone number",
        }));
      }
    } else {
      setDetailsError((p) => ({
        ...p,
        phoneError: "Please enter a valid phone number",
      }));
    }

    if (email) {
      if (email.includes("@")) {
        setDetailsError((p) => ({ ...p, emailError: "" }));
      } else {
        setDetailsError((p) => ({
          ...p,
          emailError: "Please enter a valid email address",
        }));
      }
    } else {
      setDetailsError((p) => ({
        ...p,
        emailError: "Please enter a valid email address",
      }));
    }

      if(password){
          setDetailsError(P=>({passwordError:""}))
      }
      else{
        setDetailsError(p=>({...p,passwordError:"Password should be atleast minimum 8 characters"}))
      }

      if(confirmPassword){
          if(password===confirmPassword){
            setDetailsError(p=>({...p,confirmPasswordError:""}))
          }
          else{
            setDetailsError(p=>({...p,confirmPasswordError:"Confirm Password should be same as the password"}))
          }
      }
      else{
        setDetailsError(p=>({...p,confirmPasswordError:"Confirm Password should be same as the password"}))
      }

    if (aadhar) {
      if (aadhar.length >= 12) {
        setDetailsError((p) => ({ ...p, aadharError: "" }));
      } else {
        setDetailsError((p) => ({
          ...p,
          aadharError: "Aadhar number must be 12 digits",
        }));
      }
    } else {
      setDetailsError((p) => ({
        ...p,
        aadharError: "Aadhar number must be 12 digits",
      }));
    }

    if (pan) {
      if (pan.length >= 10) {
        setDetailsError((p) => ({ ...p, panError: "" }));
      } else {
        setDetailsError((p) => ({
          ...p,
          panError: "PAN number must be 10 characters",
        }));
      }
    } else {
      setDetailsError((p) => ({
        ...p,
        panError: "PAN number must be 10 characters",
      }));
    }

    if (city) {
      if (city.length > 0) {
        setDetailsError((p) => ({ ...p, cityError: "" }));
      } else {
        setDetailsError((p) => ({ ...p, cityError: "City is required" }));
      }
    } else {
      setDetailsError((p) => ({ ...p, cityError: "City is required" }));
    }

    if (state) {
      if (state.length > 0) {
        setDetailsError((p) => ({ ...p, stateError: "" }));
      } else {
        setDetailsError((p) => ({ ...p, stateError: "State is required" }));
      }
    } else {
      setDetailsError((p) => ({ ...p, stateError: "State is required" }));
    }
  };

  return (
    <div className="employer-register-main-container">
      <div className="employer-register-container">
        <div className="employer-register-header">
          <span className="employer-header-title">Employer Registration</span>
          <span className="employer-header-subtitle">
            Create your company profile to post jobs
          </span>
        </div>
        <div className="employer-register-content">
          <div className="employer-input-row">
            <div className="employer-input-field">
              <label htmlFor="name">
                Company Name <span className="input-important">*</span>
              </label>
              <input
                id="name"
                name="companyName"
                type="text"
                onChange={handleInput}
              />
              {detailsError.companyNameError && (
                <span className="error-message">
                  {detailsError.companyNameError}
                </span>
              )}
            </div>
          </div>
          <div className="employer-input-row">
            <div className="employer-input-field">
              <label htmlFor="contact">
                Contact Person <span className="input-important">*</span>
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                onChange={handleInput}
              />
              {detailsError.contactError && (
                <span className="error-message">
                  {detailsError.contactError}
                </span>
              )}
            </div>
            <div className="employer-input-field">
              <label htmlFor="phone">
                Phone Number <span className="input-important">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                onChange={handleInput}
              />
              {detailsError.phoneError && (
                <span className="error-message">{detailsError.phoneError}</span>
              )}
            </div>
          </div>
          <div className="employer-input-row">
            <div className="employer-input-field">
              <label htmlFor="mail">
                Email <span className="input-important">*</span>
              </label>
              <input
                id="mail"
                name="email"
                type="text"
                onChange={handleInput}
              />
               {detailsError.emailError && (
                <span className="error-message">{detailsError.emailError}</span>
              )}
            </div>
          </div>
          <div className="employer-input-row">
            <div className="employer-input-field">
              <label htmlFor="pass">
                Password <span className="input-important">*</span>
              </label>
              <input
                id="pass"
                name="password"
                type="password"
                onChange={handleInput}
              />
               {detailsError.passwordError && (
                <span className="error-message">{detailsError.passwordError}</span>
              )}
            </div>
          </div>
          <div className="employer-input-row">
            <div className="employer-input-field">
              <label htmlFor="cpass">
               Confirm Password <span className="input-important">*</span>
              </label>
              <input
                id="cpass"
                name="confirmPassword"
                type="password"
                onChange={handleInput}
              />
               {detailsError.confirmPasswordError && (
                <span className="error-message">{detailsError.confirmPasswordError}</span>
              )}
            </div>
          </div>
          <div className="employer-input-row">
            <div className="employer-input-field">
              <label htmlFor="aadhar">
                Aadhar Number <span className="input-important">*</span>
              </label>
              <input
                id="aadhar"
                name="aadhar"
                type="text"
                placeholder="12 digits"
                onChange={handleInput}
              />
              {detailsError.aadharError && (
                <span className="error-message">{detailsError.aadharError}</span>
              )}
            </div>
            <div className="employer-input-field">
              <label htmlFor="pan">
                PAN Number <span className="input-important">*</span>
              </label>
              <input
                id="pan"
                name="pan"
                type="text"
                placeholder="10 characters"
                onChange={handleInput}
              />
              {detailsError.panError && (
                <span className="error-message">{detailsError.panError}</span>
              )}
            </div>
          </div>
          <div className="employer-input-row">
            <div className="employer-input-field">
              <label htmlFor="doc">
                Company Document <span className="input-important">*</span>
              </label>
             <DropFiles accept=".pdf,.doc,.docx" setFileData={setDetails}/>
              <span className="file-field">
                Upload registration certificate, GST certificate, or other
                official document
              </span>
            </div>
          </div>
          <div className="employer-input-row">
            <div className="employer-input-field">
              <label htmlFor="web">Company Website</label>
              <input
                id="web"
                type="text"
                placeholder="http://"
                name="website"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="employer-input-row">
            <div className="employer-input-field">
              <label htmlFor="address">Company Address</label>
              <textarea id="address" name="address" onChange={handleInput} />
            </div>
          </div>
          <div className="employer-input-row">
            <div className="employer-input-field">
              <label htmlFor="city">
                City <span className="input-important">*</span>
              </label>
              <input id="city" name="city" type="text" onChange={handleInput} />
              {detailsError.cityError && (
                <span className="error-message">{detailsError.cityError}</span>
              )}
            </div>
            <div className="employer-input-field">
              <label htmlFor="state">
                State <span className="input-important">*</span>
              </label>
              <input
                id="state"
                name="state"
                type="text"
                onChange={handleInput}
              />
                {detailsError.stateError && (
                <span className="error-message">{detailsError.stateError}</span>
              )}
            </div>
          </div>
          <div className="employer-input-row">
            <div className="employer-input-field">
              <label htmlFor="desc">Company Description</label>
              <textarea
                id="desc"
                placeholder="Tell potential candidates about your company..."
                name="description"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="employer-input-terms-row">
            <div className="employer-input-field">
              <input type="checkbox" id="terms" onClick={handleInput} name="terms"/>
              <div className="input-terms-field">
                <label className="input-terms-label" htmlFor="terms">
                  I am owner/primary administrator of this company
                </label>
                <span>
                  As the primary administrator, you'll be able to approve other
                  users who request access to this company profile
                </span>
              </div>
            </div>
          </div>
          <Button
            className="primary"
            buttonName="Register as Employer"
            handleClick={handleValidation}
          />
        </div>
      </div>
      {showToaster && <Toaster content="Please enter the required data" type="Error" className="error" handleClick={()=>setShowToaster(false)}/>}
    </div>
  );
};

export default EmployeeRegister;
