import axios from "axios";
import { postWorkerActionCreator } from "./SignInUserActionCreator";

export const signinWorkerAction = (data) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:1234/user-API", data);
    if (response && response.data) {
      dispatch(postWorkerActionCreator(response?.data));
    }
  };
};


export const signinEmployerAction=(data)=>{
  return async(dispatch)=>{
    const response=await axios.post("http://localhost:1234/user-API",data);
    dispatch(response?.data)
  }
}


