import axios from "axios";
import { postWorkerActionCreator } from "./SignInUserActionCreator";

export const signinWorkerAction = (data) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:2222/login", data);
    if (response && response.data) {
      dispatch(postWorkerActionCreator(response?.data));
    }
  };
};


export const signinEmployerAction=(data)=>{
  return async(dispatch)=>{
    const response=await axios.post("http://localhost:2222/empsignup",data);
    dispatch(response?.data)
  }
}
