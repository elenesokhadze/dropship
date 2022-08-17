import {useDispatch} from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import {ProductCounter} from "./ProductCounter";
import {theme} from "../../theme";
import {
 CartProductContainer,
 CartProductImageContainer,
 CartProductItemContainer,
} from "./cartProduct.styled";
import {removeFromCart} from "../../redux/cart/CartActions";

const CartProduct = ({image, title, qty, price, id}) => {
 const dispatch = useDispatch();
 const total = price * qty;

 return (
  <CartProductContainer id="CartProductContainer">
   <CartProductImageContainer id="CartHeaderContainer">
    <img src={image} alt={image} />
   </CartProductImageContainer>
   <CartProductItemContainer>{title}</CartProductItemContainer>
   <CartProductItemContainer>SP-Supplier115</CartProductItemContainer>
   <CartProductItemContainer>{price}</CartProductItemContainer>
   <CartProductItemContainer>
    <ProductCounter qty={qty} id={id} />
   </CartProductItemContainer>
   <CartProductItemContainer>{total}$</CartProductItemContainer>
   <CartProductItemContainer>
    <DeleteIcon
     fontSize="large"
     style={{color: theme.colors.primary.blue.main, cursor: "pointer"}}
     onClick={() => {
      dispatch(removeFromCart(id));
     }}
    />
   </CartProductItemContainer>
  </CartProductContainer>
 );
};
export default CartProduct;
