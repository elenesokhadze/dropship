import {combineReducers} from "redux";
import productReducer from "./productReducer";
import counter from "../counter/counterReducer";
import cart from "../cart/cartReducer";

const combinedReducer = combineReducers({
 product: productReducer,
 counter: counter,
 cart: cart,
});

export default combinedReducer;
