import { Search } from "@mui/icons-material";
import "./JobList.css"

const JobList = () => {
  return (
    <div className="job-list-main-container">
      <div className="job-list-header">
        <span className="job-list-no">Jobs Found(0)</span>
        <span className="job-list-sort">sorted by: Newest</span>
      </div>
      <div className="job-list-content-container">
        <div className="job-list-no-job-content">
          <Search style={{ color: "rgb(197, 197, 197)", fontSize: "50px" }} />
          <span className="job-list-no-job-title">No jobs found</span>
          <span className="job-list-no-job-subtitle">
            Try adjusting your search filters or keywords
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobList;
