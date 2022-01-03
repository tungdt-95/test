import {combineReducers} from "redux";
import ActionReducer from "./actions/actions-reducer"


const rootReducer = combineReducers({

    shop:ActionReducer,
})




export default rootReducer;