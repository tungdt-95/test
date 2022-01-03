import { createStore} from "redux"
import rootReducer from "./rootReducer";
import { C} from "redux-devtolls-extension"



const store = createStore(rootReducer);


export default store;