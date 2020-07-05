import { createStore } from "redux";
import reducer from "./cartReducer"

const cstore = createStore(reducer);
export default cstore;