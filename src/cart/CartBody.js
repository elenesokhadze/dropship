import {CartBodyContainer} from "./cart.styled";
import CartProduct from "./cart-product/CartProduct";
import {useSelector} from "react-redux";

export const CartBody = () => {
 const cart = useSelector((state) => state.cart);

 return (
  <CartBodyContainer id="CartBodyContainer">
   {cart?.length > 0
    ? cart.map((item, id) => {
       return (
        <CartProduct
         id={item.product.id}
         key={id}
         image={item.product.image}
         title={item.product.title}
         price={item.product.price}
         qty={item.count}
        />
       );
      })
    : null}
  </CartBodyContainer>
 );
};
