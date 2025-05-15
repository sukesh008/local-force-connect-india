import { useNavigate } from "react-router-dom"
import "./Footer.css"
import Button from "../ReusableComponents/Button"

const Footer=()=>{
const navigate=useNavigate()

    return <div className="footer-main-container">
        <div className="home-footer">
          <div className="home-footer-localblueforce">
            <span className="footer-local-header">LocalBlueForce</span>
            <span className="footer-local-content">
              Connecting skilled blue-collar workers with quality employers
              across India
            </span>
          </div>
          <div className="home-footer-forworkers">
            <span className="footer-forworkers-header">For Workers</span>
            <div className="footer-forworkers-content">
              <span onClick={()=>navigate("/findjobs")}>Find Jobs</span>
              <span onClick={()=>navigate("/wrokersignup")}>Create Profile</span>
              <span onClick={()=>navigate('*')}>FAQ</span>
            </div>
          </div>
          <div className="home-footer-foremployers">
            <span className="footer-foremployers-header">For Employers</span>
            <div className="footer-foremployers-content">
              <span>Post a Job</span>
              <span>Register</span>
              <span onClick={()=>navigate('*')}>FAQ</span>
            </div>
          </div>
          <div className="home-footer-contact">
            <span className="footer-contact-header">Contact Us</span>
            <div className="footer-contact-content">
              <span className="footer-contact-reachout">Have questions? Reach out us!</span>
              <span className="footer-contact-form" onClick={()=>navigate("/contact")}>Contact Form</span>
            </div>
            <Button
              buttonName="WhatsApp Support"
              className="ternary"
              preIcon={
                <i
                  className="bx bx-phone"
                  style={{ color: "#f7f7f7", fontSize: "24px"}}
                ></i>
              }
            />
          </div>
        </div>
        <span className="home-copy-rights">&copy; 2025 LocalBlueForce. All rights reserved.</span>
    </div>
}

export default Footer