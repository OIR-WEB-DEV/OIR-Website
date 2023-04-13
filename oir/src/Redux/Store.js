import { AuthReducers } from "./Reducers/AuthReducers"
import {combineReducers, createStore} from "redux"

const rootReducer = combineReducers({
    AuthLogin: AuthReducers,
})
const store = createStore(
    rootReducer
)
export default store;