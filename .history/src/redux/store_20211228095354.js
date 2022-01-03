import { createStore} from "redux"
import rootReducer from "./rootReducer";
import {} from "redux-dev"



const store = createStore(rootReducer);


export default store;