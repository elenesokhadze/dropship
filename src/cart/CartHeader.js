import {CartHeaderContainer, CartHeaderItemContainer} from "./cart.styled";

export const CartHeader = () => {
 return (
  <CartHeaderContainer id="CartHeaderContainer">
   <CartHeaderItemContainer>item image</CartHeaderItemContainer>
   <CartHeaderItemContainer>item title</CartHeaderItemContainer>
   <CartHeaderItemContainer>supplier</CartHeaderItemContainer>
   <CartHeaderItemContainer>item price</CartHeaderItemContainer>
   <CartHeaderItemContainer>item quantity</CartHeaderItemContainer>
   <CartHeaderItemContainer>total price</CartHeaderItemContainer>
   <CartHeaderItemContainer>remove item</CartHeaderItemContainer>
  </CartHeaderContainer>
 );
};
