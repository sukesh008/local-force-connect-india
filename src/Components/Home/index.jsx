import { useEffect } from "react";
import Button from "../ReusableComponents/Button";
import FeaturedJobs from "./FeaturedJobs";
import "./Home.css"
import HowItWorks from "./HowItWorks";
import JobCategory from "./JobCategories";
import WhatOurUserSays from "./WhatOurUsersSay";
import { useNavigate } from "react-router-dom";


const Home= () => {

  const navigate=useNavigate()

useEffect(()=>{
   localStorage.setItem("isLoggedIn",false)
},[])

  return (
    <div className="home-main-container">
      <div className="home-container">
        <div className="home-header">
          <div className="home-findjob-container">
            <span className="home-findjob-title">
              Find Your Next Blue-Collar Job
            </span>
            <span className="home-findjob-subtitle">
              Connecting skilled workers with quality employers across India
            </span>
            <div className="home-findjob-buttons">
              <Button buttonName="Find Jobs" className="primary" />
              <Button buttonName="Post a Job" className="primary" />
            </div>
          </div>
          <div className="home-input-main-container">
            <div className="home-input-container">
              <div className="input-field">
                <i
                  className="bx bx-search"
                  style={{ color: "#737272", fontSize: "24px" }}
                ></i>
                <input
                  type="text"
                  placeholder="Job title, Keywords , or Company"
                />
              </div>
              <div className="input-field">
                <i
                  className="bx bx-location-plus"
                  style={{ color: "#737272", fontSize: "24px" }}
                ></i>
                <input type="text" placeholder="City or State" />
              </div>
              <Button buttonName="Find Jobs" className="primary" />
            </div>
          </div>
        </div>

        {/* popular jobs */}
        <JobCategory />

        {/* how it works */}
        <HowItWorks />

        {/* featured jobs */}
        <FeaturedJobs />

        {/* what our user says */}
        <WhatOurUserSays />

        <div className="home-ready-to-find-job">
          <span className="ready-to-find-title">
            Ready to find a Perfect Job?
          </span>
          <span className="ready-to-find-subtitle">
            Join thousands of workers who found their next opportunity with
            LocalBlueForce
          </span>
          <div className="home-ready-to-find-job-buttons">
            <Button buttonName="Register as Worker" className="secondary" handleClick={()=>navigate("/workersignup")}/>
            <Button buttonName="Register as Employer" className="special-button" handleClick={()=>navigate("/employer-register")}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



