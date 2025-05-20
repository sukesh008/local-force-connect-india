import { useEffect, useState } from "react";
import "./jobCategories.css"
import { useNavigate } from "react-router-dom";

const popularjobs = [
  {
    icon: "🏗️",
    name: "Construction",
    jobNo: "352 jobs available",
  },
  {
    icon: "🏭",
    name: "Manufacturing",
    jobNo: "215 jobs available",
  },
  {
    icon: "🚚",
    name: "Driving",
    jobNo: "189 jobs available",
  },
  {
    icon: "🏨",
    name: "Hospitality",
    jobNo: "176 jobs available",
  },
  {
    icon: "🧹",
    name: "Cleaning",
    jobNo: "142 jobs available",
  },
  {
    icon: "🛒",
    name: "Retail",
    jobNo: "137 jobs available",
  },
  {
    icon: "🔒",
    name: "Security",
    jobNo: "98 jobs available",
  },
  {
    icon: "🏥",
    name: "HealthCare",
    jobNo: "89 jobs available",
  },
];

const JobCategory = () => {
  const navigate=useNavigate()
  const [showJobs, setShowJobs] = useState(false);
  const [jobsShown, setJobShown] = useState(6);

  useEffect(()=>{
   setJobShown(showJobs ? popularjobs.length : 6);
  },[showJobs])

  return (
    <div className="home-popular-job-category">
      <span className="home-popular-job-title">Popular Job Categories</span>
      <span className="home-popular-job-subtitle">
        Find jobs in your preferred industry
      </span>
      <div className="home-popular-jobs">
        <>
          {popularjobs.map((data, index) => {
           
             if (index < jobsShown) {
              return (
                <div className="popular-job" key={index} onClick={()=>navigate("/findjobs")}>
                  <span className="job-icon">{data.icon}</span>
                  <div className="job-details">
                    <span className="job-title">{data.name}</span>
                    <span className="job-openings">{data.jobNo}</span>
                  </div>
                </div>
              );
           }
          })}
        </>
      </div>
      <span
        className="home-popular-jobs-visibility"
        onClick={()=>setShowJobs((prev) => !prev)}
      >
        {showJobs ? "Show Less" : "Show More Categories"}
      </span>
    </div>
  );
};

export default JobCategory;
