import {combineReducers} from "redux";

import CartReducer from "./actions/actions-reducer"


const rootReducer = combineReducers({

    shop: CartReducer,
})




export default rootReducer;