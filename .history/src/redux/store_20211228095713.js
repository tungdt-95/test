import { createStore} from "redux"
import rootReducer from "./rootReducer";
import { ComposeWithDevTools } from "redux-devtools-extension"



const store = createStore(rootReducer,ComposeWithDevTools());


export default store;