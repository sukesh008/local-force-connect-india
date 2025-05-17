import Button from "../../ReusableComponents/Button"
import "./WorkExperience.css"

const WorkExperience=()=>{
  return <div className="work-experience-main-container">
        <div className="experience-container">
            <div className="experience-header">
              <div className="experience-header-name">
                  <span className="experience-header-title">Work Experience</span>
                <span className="experience-header-subtitle">Your work history and employment records</span>
              </div>
              <Button className="primary" buttonName="Add Experience"/>
            </div>
            <div className="experience-content">
                    <span>some content is to be placed here</span>
            </div>
            <Button className="ternary" buttonName="Add New Experience"/>
        </div>
  </div>
}

export default WorkExperience