import {combineReducers} from "redux";
import Reducer from "./actions/actions-reducer"


const rootReducer = combineReducers({

    shop:CartReducer,
})




export default rootReducer;