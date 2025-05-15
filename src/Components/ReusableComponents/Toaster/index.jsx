import { Close } from "@mui/icons-material"
import "./Toaster.css"

const Toaster=({content,handleClick})=>{
    
    return <div className="toaster-main-container" >
        <span className="close-button-container">
            <Close className="close-button" onClick={handleClick}/>
            </span>
        <span>{content}</span>
        </div>
}

export default Toaster