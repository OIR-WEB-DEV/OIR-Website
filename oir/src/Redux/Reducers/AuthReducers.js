import { FORGOTPASSWORD, LOGIN, OTP, REGISTER } from "../Actions/GlobalTypes";

const InitalState={
    isloading : false,
    forgotpassword : {}, 
    loginAuth: {},
    registerAuth: {},
    otpAuth: {},
}
export const AuthReducers=(state= InitalState,action)=>{
    const data = action.payload;
    switch (action.type) {
        case LOGIN:
            return { 
                ...state,
                loginAuth: {...state.loginAuth,data},
              };
        case REGISTER:
            return {
                ...state,
                registerAuth: {...state.registerAuth,data},
              };
        case FORGOTPASSWORD:
            return {
                ...state,
                forgotpassword:{...state.forgotpassword,data},
            }
        case OTP:
            return {
                ...state,
                otpAuth:{...state.otpAuth,data},
            }
        default:
            return state;
    }
}