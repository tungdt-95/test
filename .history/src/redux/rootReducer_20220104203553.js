import {combineReducers} from "redux";

import CartReducer from "./actions/actions-reducer"


const rootReducer = combineReducers({

    cart: CartReducer,
})




export default rootReducer;