import {combineReducers} from "redux";
import productReducer from "./productReducer";
import counter from "../counter/counterReducer";
import cart from "../cart/cartReducer";
import auth from "../authentication/authReducer";

const combinedReducer = combineReducers({
 product: productReducer,
 counter: counter,
 cart: cart,
 auth: auth,
});

export default combinedReducer;
