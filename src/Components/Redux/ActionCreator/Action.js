import axios from "axios";
import { postWorkerActionCreator } from "./SignInUserActionCreator";

export const signinUserAction = (data) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:1234/login-API", data);
    if (response && response.data) {
      dispatch(postWorkerActionCreator(response?.data));
    }
  };
};


export const signUpUserAction=(data)=>{
  return async(dispatch)=>{
    const response=await axios.post("http://localhost:3000/user-API",data);
    dispatch(response?.data)
  }
}


