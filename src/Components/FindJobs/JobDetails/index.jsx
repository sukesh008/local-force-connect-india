import { Work } from "@mui/icons-material"
import "./JobDetails.css"

const JobDetails=()=>{

    return <div className="job-details-main-container">
        <div className="job-details-no-details-container">
         <div className="job-details-no-details-content">
             <Work style={{ color: "rgb(197, 197, 197)", fontSize: "50px" }}/>
          <span className="no-job-details-title">No job selected</span>
          <span className="no-job-details-subtitle">Select a job from the list to view details</span>
         </div>
        </div>

    </div>
}

export default JobDetails