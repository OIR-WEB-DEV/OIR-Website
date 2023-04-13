import { LOGIN, REGISTER } from "./GlobalTypes"


export const loginUser=(userDetails)=>{
    return {
        type:LOGIN,
        payload: userDetails
    }
}
export const registerUser=(userDetails)=>{
    return {
        type:REGISTER,
        payload: userDetails
    }
}