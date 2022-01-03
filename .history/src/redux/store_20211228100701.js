import { createStore} from "redux"
import rootReducer from "./rootReducer";
import { ComposeWithDevTools } from "redux-devtools-extension";
import {} from "re"


const store = createStore(rootReducer, ComposeWithDevTools());


export default store;