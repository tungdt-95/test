import { createStore} from "redux"
import rootReducer from "./rootReducer";
import {} from "redux-devtolls-extension"



const store = createStore(rootReducer);


export default store;