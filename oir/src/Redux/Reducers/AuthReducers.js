import { FORGOTPASSWORD, LOGIN, OTP, REGISTER } from "../Actions/GlobalTypes";

const InitalState={
    isloading : false,
    forgotpassword : {}, 
    loginAuth: {},
    registerAuth: {},
    otpAuth: {},
}
export const AuthReducers=(state= InitalState,action)=>{
    switch (action.type) {
        case LOGIN:
            const p1load = action.payload;
            return {
                ...state,
                loginAuth: {...state.loginAuth,p1load},
              };
        case REGISTER:
            const p2load = action.payload;
            return {
                ...state,
                registerAuth: {...state.registerAuth,p2load},
              };
        case FORGOTPASSWORD:
            const p3load = action.payload;
            return {
                ...state,
                forgotpassword:{...state.forgotpassword,p3load},
            }
        case OTP:
            const p4load = action.payload;
            return {
                ...state,
                otpAuth:{...state.otpAuth,p4load},
            }
        default:
            return state;
    }
}