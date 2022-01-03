import { createStore} from "redux"
import rootReducer from "./rootReducer";
import {} from "redux-devtools-extension"
const store = createStore(rootReducer);


export default store;