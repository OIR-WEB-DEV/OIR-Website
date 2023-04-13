import { AuthReducers } from "./Reducers/AuthReducers"
const store = configureStore({
    reducer:{
        AuthLogin: AuthReducers,
    }
})
export default store;