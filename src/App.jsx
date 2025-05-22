import "./App.css"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import WhatsApp from "./Components/Whatsapp"
import FindJobs from "./Components/FindJobs"
import Contact from "./Components/Contact"
import LoginPage from "./Components/LoginPage"
import WorkerSignUp from "./Components/LoginPage/WorkerSignUp"
import EmployeeRegister from "./Components/LoginPage/EmployeeRegister"
import PostJob from "./Components/PostAJob"
import ErrorPage from "./Components/ErrorPage"
import Footer from "./Components/Footer"
import { Provider } from "react-redux"
import store from "./Components/Redux/Store"
import AuthData from "./Components/Auth"
import RequiredAuth from "./Components/Auth/RequiredAuth"
import WorkerDashboard from "./Components/WorkerDashboard"
import TabButton from "./Components/ReusableComponents/SwitchTabsButton"



const App=()=>{
  const location=useLocation()
  return  <AuthData>
    <Provider store={store}>
    <div>
      {location.pathname !== "/*" && <NavBar />}
      {location.pathname !== "/*" && <WhatsApp />}
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="findjobs" element={<FindJobs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<LoginPage/>}/>
        <Route path="workersignup" element={<WorkerSignUp/>}/>  
        <Route path="employer-register" element={<EmployeeRegister/>}/>
        <Route path="post-job" element={<RequiredAuth><PostJob/></RequiredAuth> }/>
        <Route path="worker-dashboard" element={<WorkerDashboard/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {location.pathname !== "/*" && <Footer />}
    </div>
  </Provider>
  </AuthData>
}

export default App
