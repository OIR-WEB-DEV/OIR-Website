import { LOGIN, REGISTER } from "../Actions/GlobalTypes";

const InitalState={
    loginAuth: {},
    otpAuth: {},
}
export const AuthReducers=(state= InitalState,action)=>{
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loginAuth: action.payload,
              };
        case REGISTER:
            return {
                ...state,
                loginAuth: action.payload,
              };
        default:
            return state;
    }
}