import { SIGNIN_EMPLOYER_ACTION } from "./ActionTypes"


export const postEmployerActionCreator=(data)=>{
  return {
    type:SIGNIN_EMPLOYER_ACTION.POST_EMPLOYERDATA,
    payload:data
  }
}