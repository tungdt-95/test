import { createStore} from "redux"
import rootReducer from "./rootReducer";
import { Com} from "redux-devtolls-extension"



const store = createStore(rootReducer);


export default store;