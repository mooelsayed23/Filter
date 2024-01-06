import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Myredux from "./Reducer";
export const store = createStore(Myredux, applyMiddleware(thunk));
