import { useState } from "react";
import "./Contact.css"
import { isAlphabet, isNumber, isValidNumber } from "../HelperFunctions/helper";
import { LocationOn, Mail, Phone } from "@mui/icons-material";
import Button from "../ReusableComponents/Button";


const userInfo = {
  name: "",
  mail: "",
  number: "",
  subject: "",
  content: "",
};

const userError = {
  nameError: "",
  mailError: "",
  numberError: "",
  subjectError: "",
  contentError: "",
};

const Contact = () => {
  const [userDetails, setUserDetails] = useState(userInfo);
  const [userDetailsError, setUserDetailsError] = useState(userError);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });

    setUserDetailsError(p=>({...p,[name+"Error"]:""}))
  };

  const handleError = () => {
    const { name, mail,number,content } = userDetails;

    if (name) {
      if (isAlphabet(name) && name.length >= 3) {
        setUserDetailsError(p=>({ ...p, nameError: "" }));
      } else {
        setUserDetailsError(p=>({
          ...p,
          nameError:
            "Name Should be minimum 3 characters and it should contains only alphabets",
        }));
      }
    } else {
      setUserDetailsError(p=>({
        ...p,
        nameError:
          "Name Should be minimum 3 characters and it should contains only alphabets",
      }));
    }
    if(mail){
        if(mail.split('').includes('@')){
             setUserDetailsError(p=>({ ...p, mailError: "" }));
        }
        else{
             setUserDetailsError(p=>({...p,mailError:"Fill in the field and Mail id should contain @"}))
        }
    }
    else{
        setUserDetailsError(p=>({...p,mailError:"Fill in the field and Mail id should contain @"}))
    }
   if(content){
    setUserDetailsError(p=>({...p,contentError:""}))   
   }
   else{
    setUserDetailsError(p=>({...p,contentError:"This field should be filled"}))
   }
   if(number){
       if(isNumber(number) && isValidNumber(number)){
            setUserDetailsError(p=>({...p,numberError:""}))
       }
       else{
        setUserDetailsError(p=>({...p,numberError:"Requires 10 numbers and no any other characters"}))
       }
   }
   else{
    setUserDetailsError(p=>({...p,numberError:"Requires 10 numbers and no any other characters"}))
   }
  };


  return (
    <div className="contact-main-container">
      <div className="contact-header">
        <span className="contact-header-title">Contact Us</span>
        <span className="contact-header-subtitle">
          Have questions or need help? Get in touch with our team.
        </span>
      </div>
      <div className="contact-container">
        <div className="contact-information">
          <span className="contact-information-header">
            Contact Information
          </span>
          <div className="contact-information-content">
            <div className="contact-information-via">
              <Phone style={{ color: "#1964f3" }} />
              <div className="contact-details">
                <span className="contact-details-header">Phone</span>
                <span className="contact-details-content">+91 9876543210</span>
                <span className="contact-details-content">
                  Mon-Fri, 9:00 AM - 6:00 PM
                </span>
              </div>
            </div>
            <div className="contact-information-via">
              <Mail style={{ color: "#1964f3" }} />
              <div className="contact-details">
                <span className="contact-details-header">Email</span>
                <span className="contact-details-content">
                  info@localblueforce.com
                </span>
                <span className="contact-details-content">
                  support@localblueforce.com
                </span>
              </div>
            </div>
            <div className="contact-information-via">
              <LocationOn style={{ color: "#1964f3" }} />
              <div className="contact-details">
                <span className="contact-details-header">Office</span>
                <span className="contact-details-content">
                  123 Business Park, Andheri East Mumbai, Maharashtra 400093
                  India
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-message-container">
          <span className="contact-message-header">Send us a Message</span>
          <div className="contact-message-content">
            <div className="contact-input-row">
              <div className="contact-input-field">
                <label htmlFor="name">
                  Your Name <span className="input-important">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleInput}
                />
                {userDetailsError.nameError && (
                  <span className="error-message">
                    {userDetailsError.nameError}
                  </span>
                )}
              </div>
              <div className="contact-input-field">
                <label htmlFor="mail">
                  Email Address <span className="input-important">*</span>
                </label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  onChange={handleInput}
                />
                {userDetailsError.mailError && (
                  <span className="error-message">
                    {userDetailsError.mailError}
                  </span>
                )}
              </div>
            </div>
            <div className="contact-input-row">
              <div className="contact-input-field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="phone"
                  id="phone"
                  name="number"
                  onChange={handleInput}
                />
                {userDetailsError.numberError &&  <span className="error-message">
                    {userDetailsError.numberError}
                  </span>}
              </div>
              <div className="contact-input-field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="contact-text-area">
              <label htmlFor="text">
                Message <span className="input-important">*</span>
              </label>
              <textarea id="text" name="content" onChange={handleInput} />
               {userDetailsError.contentError && (
                  <span className="error-message">
                    {userDetailsError.contentError}
                  </span>
                )}
            </div>
            <div>
              {" "}
              <Button
                buttonName="Send Message"
                className="primary"
                handleClick={handleError}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-find-us">
        <span className="contact-find-us-header">Find Us</span>
        <div className="contact-find-us-map">
          <span>Google Maps would be embedded here</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
