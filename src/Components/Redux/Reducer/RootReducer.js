import { combineReducers } from "redux";
import workerSignInReducer from "./RegisterReducer";



const rootReducer=combineReducers({
    workerSignInDetails:workerSignInReducer
})

export default rootReducer