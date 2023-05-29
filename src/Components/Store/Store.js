import { compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/Index";
import { applyMiddleware } from "redux";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(rootReducer , composeEnhancers(applyMiddleware(thunk)));

export default Store 