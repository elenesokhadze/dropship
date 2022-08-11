import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {CartContainer, CartHeadingContainer} from "./cart.styled";
import {CartHeader} from "./CartHeader";
import {CartFooter} from "./CartFooter";
import {CartBody} from "./CartBody";
import {getProducts} from "../redux/products/ProductActions";

const Cart = () => {
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(getProducts());
 }, [dispatch]);
 return (
  <CartContainer>
   <CartHeadingContainer>
    <h3>SHOPPING CART (0)</h3>
   </CartHeadingContainer>
   <CartHeader />
   <CartBody />
   <CartFooter />
  </CartContainer>
 );
};

export default Cart;
