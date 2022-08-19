import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {
 CartFooterContainer,
 CartFooterPriceContainer,
 CartFooterPriceItem,
} from "./cart.styled";
import {PrimaryButton} from "../button/PrimaryButton";

export const CartFooter = () => {
 const cart = useSelector((state) => state.cart);

 let total = cart.reduce(
  (currentTotal, item) => currentTotal + item.product.price * item.count,
  0
 );

 let finalTotal = Math.round(total * 100) / 100;
 return (
  <CartFooterContainer id="CartFooterContainer">
   <Link to="./catalog" style={{textDecoration: "none"}}>
    <PrimaryButton>Continue Shopping</PrimaryButton>
   </Link>
   <CartFooterPriceContainer id="CartFooterPriceContainer">
    <div>
     balance: <CartFooterPriceItem>$0.00</CartFooterPriceItem>
    </div>
    <div>
     order total: <CartFooterPriceItem>{finalTotal}</CartFooterPriceItem>
    </div>
   </CartFooterPriceContainer>
  </CartFooterContainer>
 );
};
