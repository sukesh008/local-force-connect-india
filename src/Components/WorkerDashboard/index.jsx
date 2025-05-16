import { EditDocument, Mail, Person } from "@mui/icons-material";
import profileImage from "../../assets/vadivelu profile.jpg";
import Batch from "../ReusableComponents/Batches";
import Button from "../ReusableComponents/Button";
import "./WorkerDashboard.css";
import TabButton from "../ReusableComponents/SwitchTabsButton";
import ProfileSummary from "./ProfileSummary";

const WorkerDashboard = () => {
  return (
    <div className="worker-dashboard-main-container">
      <div className="worker-dashboard-container">
        <span className="dashboard-header">Worker Dashboard</span>
        <div className="worker-dashboard-content">
          <div className="dashboard-profile">
           <div className="profile-image"> <img src={profileImage} alt="profile-image" /></div>
            <div className="profile-about">
              <span className="profile-name">Rajesh Kumar</span>
              <span className="profile-location">Mumbai, Maharashtra</span>
            </div>
           <div className="profile-contact">
              <div className="profile-number">
              <Person sx={{ color: "var(--primary-blue)", fontSize: "20px" }} />
              <span>+91 98765 43210</span>
            </div>
            <div className="profile-mail">
              <Mail sx={{ color: "var(--primary-blue)", fontSize: "20px" }} />
              <span>rajesh.kumar@example.com</span>
            </div>
           </div>
            <div className="profile-skills">
              <span className="profile-skills-header">Skills</span>
              <div className="profile-skills-container">
                <Batch content="Electrician" batchType="skills" />
                <Batch content="Wiring" batchType="skills" />
                <Batch content="Panel Installation" batchType="skills" />
                <Batch content="Maintenance" batchType="skills" />
              </div>
            </div>
            <Button
              buttonName="Edit profile"
              preIcon={<EditDocument sx={{fontSize:"20px"}}/>}
              className="ternary"
            />
          </div>
          <div className="dashboard-career-profile">
            <TabButton tabs={["Profile Summary","Work Experience","Job Applications"]}/>
            <ProfileSummary/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
