import {  SIGNIN_WORKER_ACTION } from "./ActionTypes"


export const postWorkerActionCreator=(data)=>{
       return {
        type:SIGNIN_WORKER_ACTION.POST_WORKERDATA,
        payload:data
       }
}
