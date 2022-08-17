import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {CartContainer, CartHeadingContainer} from "./cart.styled";
import {CartHeader} from "./CartHeader";
import {CartFooter} from "./CartFooter";
import {CartBody} from "./CartBody";
import {getProducts} from "../redux/products/ProductActions";
import Menu from "../menu/Menu";

const Cart = () => {
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(getProducts());
 }, [dispatch]);
 return (
  <>
   <Menu />
   <CartContainer id="CartContainer">
    <CartHeadingContainer id="CartHeadingContainer">
     <h3>shopping cart</h3>
    </CartHeadingContainer>
    <CartHeader />
    <CartBody />
    <CartFooter />
   </CartContainer>
  </>
 );
};

export default Cart;
