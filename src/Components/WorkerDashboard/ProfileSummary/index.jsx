import { Description, Work } from "@mui/icons-material";
import Batch from "../../ReusableComponents/Batches";
import Button from "../../ReusableComponents/Button";
import "./ProfileSummary.css";

const ProfileSummary = () => {
  return (
    <div className="profile-summary-main-container">
      <div className="summary-container">
        <span className="summary-header">Profile Summary</span>
        <span className="summary-content">
          Experienced electrician with over 5 years of industrial and
          residential experience. Proficient in electrical installations,
          maintenance, and troubleshooting.
        </span>
        <div className="summary-skills">
          <span className="skills-header">Key Skills</span>
          <div className="summary-skills-container">
            <Batch content="Electrician" batchType="skills" />
            <Batch content="Wiring" batchType="skills" />
            <Batch content="Panel Installation" batchType="skills" />
            <Batch content="Maintenance" batchType="skills" />
          </div>
        </div>
        <div className="summary-recent-experience">
          <span className="recent-experience-header">Recent Experience</span>
          <div className="recent-experience-content">
            <div className="recent-experience-role">
              <span className="role-name">Senior Electrician</span>
              <span className="recent-experience-duration">2019-2023</span>
            </div>
            <span className="recent-experience-company">Tata Projects</span>
            <span className="recent-experience-about-role">
              Managed electrical installations for commercial buildings. Led a
              team of 4 junior electricians.
            </span>
          </div>
        </div>
        <div className="summary-recent-application">
          <span className="recent-application-header">Recent Applications</span>
          <div className="recent-application-content">
            <div>Some content will be place here</div>
          </div>
        </div>
        <div className="profile-summary-buttons">
          <Button
            className="ternary"
            preIcon={<Work sx={{ fontSize: "20px" }} />}
            buttonName="View Work History"
          />
          <Button
            className="ternary"
            preIcon={<Description sx={{ fontSize: "20px" }} />}
            buttonName="View Applications"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
