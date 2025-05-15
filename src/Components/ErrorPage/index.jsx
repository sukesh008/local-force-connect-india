import { useNavigate } from "react-router-dom"
import "./Errorpage.css"

const ErrorPage=()=>{
const navigate=useNavigate()

    return <div className="error-main-container">
        <div className="error-container">
        <span className="error-name">404</span>
        <span className="error-content">Oops! Page not found</span>
        <span onClick={()=>navigate("/")} className="error-return">Return to Home</span>
        </div>

    </div>
}

export default ErrorPage