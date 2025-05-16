import { SIGNIN_WORKER_ACTION } from "../ActionCreator/ActionTypes"


const initialstate={
    workerSignInData:{}
}

const workerSignInReducer=(state=initialstate,{type,payload})=>{

    switch(type){
        case SIGNIN_WORKER_ACTION.GET_WORKERDATA:
            return {...state,workerSignInData:payload}
        default:
            return {...state}
    }
}

export default workerSignInReducer