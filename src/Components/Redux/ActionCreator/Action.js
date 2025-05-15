import axios from "axios"
import { postWorkerActionCreator } from "./SignInUserActionCreator"



export const signinWorkerAction=(data)=>{
         return async(dispatch)=>{
           try{
             const response= await axios.post("http://localhost:2222/login",data);
            if(response && response.data){
                dispatch(postWorkerActionCreator(response?.data))
            }
            else{
                console.log("Some error occured")
            }
           }catch(error){
            console.error("Login-failed:",error.message)
           }
         }
}

