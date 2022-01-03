import {combineReducers} from "redux";
import ActionReducer from "./actions/actions-reducer"


const rootReducer = combineReducers({
    cart:ActionReducer,
})




export default rootReducer;