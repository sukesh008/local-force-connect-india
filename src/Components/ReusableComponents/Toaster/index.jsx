import { Close } from "@mui/icons-material"
import "./Toaster.css"

const Toaster=({content,handleClick,className,type})=>{
    
    return <div className={`toaster-main-container ${className}`}>
            <div className="toaster-header">
                <span className="toaster-header-title">{type}</span>
                 <Close className="close-button" onClick={handleClick} sx={{fontSize:"15px"}}/>
            </div>
            <span className="toaster-content">{content}</span>
    </div>
}

export default Toaster


{/* <div className={`toaster-main-container ${className}`} >
        <span className="toaster-header">
            <span className={`toaster-title ${className}`}>{className}</span>
            <Close className="close-button" onClick={handleClick}/>
            </span>
        <span className="toaster-content">{content}</span>
        </div> */}