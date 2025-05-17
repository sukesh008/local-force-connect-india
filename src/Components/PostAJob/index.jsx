import { useEffect, useRef, useState } from "react";
import "./PostAJob.css"
import { MenuItem, Select } from "@mui/material";
import Button from "../ReusableComponents/Button";
import Toaster from "../ReusableComponents/Toaster";

const jobDetails = {
  JobTitle: "",
  CompanyName: "",
  Location: "",
  JobType: "",
  MinimumSalary:"",
  MaximumSalary:"",
  JobDescription: "",
  Requirements: "",
  Benifits: "",
};





const PostJob = () => {

  const [details, setDetails] = useState(jobDetails);
  const [showToaster,setShowToaster]=useState(false)
  const toasterTimer=useRef(null)


  const handleInput = (e) => {
    const { name, value } = e.target;
    setDetails((p) => ({ ...p, [name]: value }));
  };

  const handleJobPost = ()=> {
    const {JobTitle,CompanyName,Location,JobType,JobDescription,Requirements}=details
   const hasError= !JobTitle || !CompanyName || !Location || !JobType || !JobDescription || !Requirements

   if(hasError){
    setShowToaster(true);
      if(toasterTimer.current) clearTimeout(toasterTimer.current);
     setTimeout(()=>{
        setShowToaster(false)
     },3000)
   }
   else{
    setShowToaster(false)
    setDetails(jobDetails)
   }

  };


  const handleToaster=()=>{
    setShowToaster(false)
  }

  return (
    <div className="postjob-main-container">
      <div className="postjob-container">
        <div className="postjob-header">
          <span className="header-title">Post a Job</span>
          <span className="header-subtitle">
            Fill out the form below to post a new job listing
          </span>
        </div>
        <div className="postjob-content">
          <div className="postjob-input-row">
            <div className="input-field">
              <label htmlFor="title">
                Job Title <span className="input-important">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Experienced Electrician"
                id="title"
                name="JobTitle"
                value={details.JobTitle}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="postjob-input-row">
            <div className="input-field">
              <label htmlFor="cname">
                Company Name <span className="input-important">*</span>
              </label>
              <input
                type="text"
                id="cname"
                name="CompanyName"
                value={details.CompanyName}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="postjob-input-row">
            <div className="input-field">
              <label htmlFor="location">
                Location <span className="input-important">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="Location"
                value={details.Location}
                onChange={handleInput}
              />
            </div>
            <div className="input-field">
              <label htmlFor="type">
                Job Type <span className="input-important">*</span>
              </label>
              <Select
                id="type"
                name="JobType"
                value={details.JobType}
                onChange={handleInput}
                displayEmpty
                sx={{
                  height: 38,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--lighter-gray)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                }}
              >
                <MenuItem value="" disabled>Select job type
                </MenuItem>
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Part-time">Part-time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
                <MenuItem value="Temporary">Temporary</MenuItem>
              </Select>
            </div>
          </div>
          <div className="postjob-input-row">
            <div className="input-field">
              <label htmlFor="minsalary">Minimum Salary(₹)</label>
              <input
                type="number"
                id="minsalary"
                placeholder="e.g. 15000"
                name="MinimumSalary"
                value={Number(details.MinimumSalary)}
                onChange={handleInput}
              />
            </div>
            <div className="input-field">
              <label htmlFor="maxsalary">Maximum Salary(₹)</label>
              <input
                type="number"
                id="maxsalary"
                placeholder="e.g. 25000"
                name="MaximumSalary"
                value={Number(details.MaximumSalary)}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="postjob-input-row">
            <div className="input-field">
              <label htmlFor="desc">
                Job Description <span className="input-important">*</span>
              </label>
              <textarea
                id="desc"
                placeholder="Provide details about the job responsibilities..."
                name="JobDescription"
                value={details.JobDescription}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="postjob-input-row">
            <div className="input-field">
              <label htmlFor="req">
                Requirements <span className="input-important">*</span>
              </label>
              <textarea
                id="req"
                placeholder="List skills, experience ,qualifications required..."
                name="Requirements"
                value={details.Requirements}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="postjob-input-row">
            <div className="input-field">
              <label htmlFor="benifit">Benifits</label>
              <textarea
                id="benifit"
                name="Benifits"
                value={details.Benifits}
                onChange={handleInput}
                placeholder="List perks, benifits, compensation details..."
              />
            </div>
          </div>
          <Button
            className="primary"
            buttonName="Post Job"
            handleClick={handleJobPost}
          />
        </div>
      </div>
      {showToaster && <Toaster content="Please fill all required fields" handleClick={handleToaster} className="error" type="Error"/>}
    </div>
  );
};

export default PostJob;
