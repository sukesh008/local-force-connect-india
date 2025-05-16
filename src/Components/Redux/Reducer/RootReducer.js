import { combineReducers } from "redux";
import workerSignInReducer from "./workerSignInReducer";
import employerSignInReducer from "./EmployerSignInReducer";




const rootReducer=combineReducers({
    workerSignInDetails:workerSignInReducer,
    employerSignInDetails:employerSignInReducer
})

export default rootReducer