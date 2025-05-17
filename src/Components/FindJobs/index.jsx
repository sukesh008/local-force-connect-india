import { useState } from "react";
import "./FindJob.css";
import JobDetails from "./JobDetails";
import JobList from "./JobList";
import Button from "../ReusableComponents/Button";
import { Box, Slider, Typography } from "@mui/material";
import TabButton from "../ReusableComponents/SwitchTabsButton";


const tabs=["List View","Map View"]

const FindJobs = () => {
  const [value, setValue] = useState([28000, 40000]);
  const [currentTab,setCurrentTab]=useState(tabs[0])

  const handleChange = (e,newValue) => {
    setValue(newValue);
  };


  return (
    <div className="find-job-main-container">
      <div className="find-job-container">
        <div className="find-job-input-container">
          <div className="find-job-input-field">
            <i
              className="bx bx-search"
              style={{ color: "#737272", fontSize: "24px" }}
            ></i>
            <input type="text" placeholder="Job title, Keywords, or company" />
          </div>
          <div className="find-job-input-field">
            <i
              className="bx bx-location-plus"
              style={{ color: "#737272", fontSize: "24px" }}
            ></i>
            <input type="text" placeholder="Job title, Keywords, or company" />
          </div>
          <Button className="primary" buttonName="Find Jobs" />
        </div>
        {/* switch job view*/}
       
        <div className="switch-job-view-container"><TabButton tabs={tabs}  currentTab={currentTab} setCurrentTab={setCurrentTab} className="find-job-view"/></div>
        
        {/* filter jobs  */}
        <div className="find-job-filter-container">
          <div className="find-job-filters">
            <div className="job-type-filter">
              <span className="filter-type-header">Job Type</span>
              <div className="job-type-filters">
                <div className="filter-container">
                  <input type="checkbox" id="full-time" />
                  <label htmlFor="full-time">Full-time</label>
                </div>
                <div className="filter-container">
                  <input type="checkbox" id="part-time" />
                  <label htmlFor="part-time">Part-time</label>
                </div>
                <div className="filter-container">
                  <input type="checkbox" id="contract" />
                  <label htmlFor="contract">Contract</label>
                </div>
                <div className="filter-container">
                  <input type="checkbox" id="temp" />
                  <label htmlFor="temp">Temporary</label>
                </div>
              </div>
            </div>
            <div className="salary-range-filter">
              <Box width={300} display={"flex"} flexDirection={"column"}>
                <Typography
                  sx={{ fontSize: "17px" }}
                  fontWeight={600}
                  gutterBottom
                >
                  Salary Range
                </Typography>
                <Slider
                  className="custom-salary-slider"
                  value={value}
                  min={5000}
                  max={50000}
                  step={1000}
                  onChange={handleChange}
                />
                <Box display="flex" justifyContent="space-between">
                  <Typography sx={{ fontSize: "14px" }}>
                    ₹{value[0].toLocaleString()}
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>
                    ₹{value[1].toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            </div>
            <div className="experience-level-filter">
              <span className="filter-type-header">Experience Level</span>
              <div className="experience-level-filters">
                <div className="filter-container">
                  <input type="checkbox" id="fresher" />
                  <label htmlFor="fresher">Fresher</label>
                </div>
                <div className="filter-container">
                  <input type="checkbox" id="inter" />
                  <label htmlFor="inter">Intermediate</label>
                </div>
                <div className="filter-container">
                  <input type="checkbox" id="exp" />
                  <label htmlFor="exp">Experianced</label>
                </div>
              </div>
            </div>
          </div>
          <Button className="primary" buttonName="Apply Filters" />
        </div>
        {/* Jobs Found */}
        <div className="job-container">
          <span className="job-list">
            <JobList />
          </span>
          <span className="job-details">
            {" "}
            <JobDetails />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
