import {Link} from "react-router-dom";
import {
 CartFooterContainer,
 CartFooterPriceContainer,
 CartFooterPriceItem,
} from "./cart.styled";
import {PrimaryButton} from "../button/PrimaryButton";

export const CartFooter = () => {
 return (
  <CartFooterContainer id="CartFooterContainer">
   <Link to="./catalog" style={{textDecoration: "none"}}>
    <PrimaryButton>Continue Shopping</PrimaryButton>
   </Link>
   <CartFooterPriceContainer>
    <div>
     balance: <CartFooterPriceItem>$0.00</CartFooterPriceItem>
    </div>
    <div>
     item price: <CartFooterPriceItem>$0.00</CartFooterPriceItem>
    </div>
    <div>
     order total: <CartFooterPriceItem>$0.00</CartFooterPriceItem>
    </div>
   </CartFooterPriceContainer>
  </CartFooterContainer>
 );
};
