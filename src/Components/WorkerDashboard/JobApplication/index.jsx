import { useNavigate } from "react-router-dom";
import Button from "../../ReusableComponents/Button";
import "./JobApplication.css";

const JobApplication = () => {
const navigate=useNavigate()

  return (
    <div className="job-application-main-container">
      <div className="application-container">
        <div className="application-header">
          <div className="application-header-name">
            <span className="application-header-title">Job Applications</span>
            <span className="application-header-subtitle">
              Jobs you've applied for and their status
            </span>
          </div>
          <Button className="primary" buttonName="Browse Jobs" handleClick={()=>navigate("/findjobs")}/>
        </div>
        <div className="application-content">
          <span>Some conent needs to be placed here</span>
        </div>
        <Button className="primary" buttonName="Search New Jobs" handleClick={()=>navigate("/findjobs")}/>
      </div>
    </div>
  );
};

export default JobApplication;
