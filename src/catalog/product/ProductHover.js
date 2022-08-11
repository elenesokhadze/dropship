import {ProductHoverContainer} from "./product.styled.ts";
import {PrimaryButton} from "../../button/PrimaryButton";
import {useDispatch, useSelector} from "react-redux";
import {selectOne, removeOne} from "../../redux/products/ProductActions";
import {addToCart} from "../../redux/cart/CartActions";

export const ProductHover = ({id}) => {
 const products = useSelector((state) => state.product.products);
 const dispatch = useDispatch();
 const selectedProducts = useSelector(
  (state) => state.product.selectedProducts
 );

 const count = useSelector((state) => state.counter[id]?.count);
 const product = products.find((item) => item.id === id);

 const selectProductHandler = () => {
  if (selectedProducts.includes(id)) {
   dispatch(removeOne(id));
  } else dispatch(selectOne(id));
 };
 const addToInventory = (e) => {
  e.preventDefault();
  e.stopPropagation();
  dispatch(addToCart(product, count || 1));
 };

 return (
  <ProductHoverContainer>
   <label>
    <input
     onClick={(e) => e.stopPropagation()}
     type="checkbox"
     checked={selectedProducts.includes(id)}
     onChange={selectProductHandler}
    />
   </label>
   <PrimaryButton onClick={addToInventory}>add to cart</PrimaryButton>
  </ProductHoverContainer>
 );
};
