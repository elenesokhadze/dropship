import {ProductHoverContainer} from "./product.styled.ts";
import {PrimaryButton} from "../../button/PrimaryButton";
import {useDispatch, useSelector} from "react-redux";
import {selectOne, removeOne} from "../../redux/products/ProductActions";
import {addToCart} from "../../API";

export const ProductHover = ({id}) => {
 const dispatch = useDispatch();
 const selectedProducts = useSelector(
  (state) => state.product.selectedProducts
 );

 const selectProductHandler = () => {
  if (selectedProducts.includes(id)) {
   dispatch(removeOne(id));
  } else dispatch(selectOne(id));
 };
 const addToInventory = (e) => {
  e.preventDefault();
  e.stopPropagation();
  addToCart(id, 1).then(() => {
   console.log("success");
  });
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
