import { SIGNIN_EMPLOYER_ACTION } from "../ActionCreator/ActionTypes"

const initialState={
    employerSignInData:{}
}

const employerSignInReducer=(state=initialState,{type,payload})=>{

    switch(type){
        case SIGNIN_EMPLOYER_ACTION.POST_EMPLOYERDATA:
            return {...state,employerSignInData:payload}
        default:
            return {...state}
    }
}

export default employerSignInReducer