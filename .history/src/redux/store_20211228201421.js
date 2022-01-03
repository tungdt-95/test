import { createStore} from "redux"
import rootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension"
const store = createStore(rootReducer,co);


export default store;