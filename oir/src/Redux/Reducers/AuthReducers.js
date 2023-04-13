import { LOGIN } from "../Actions/GlobalTypes";

const InitalState={
    loginAuth: {},
    otpAuth: {},
}
export const AuthReducers=(state= InitalState,action)=>{
    switch (action.type) {
        case LOGIN:
            
            /**
             * login user logic
             */

        case LOGIN:
            
            /**
             * register user logic
             */
    
        default:
            return state;
    }
}