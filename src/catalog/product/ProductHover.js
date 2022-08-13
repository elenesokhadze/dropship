import {
 ProductHoverContainer,
 ProductHoverButtonContainer,
} from "./product.styled.ts";
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
 const allSelectedId = selectedProducts.map((product) => product.id);

 const selectProductHandler = () => {
  if (allSelectedId.includes(id)) {
   dispatch(removeOne(id));
  } else dispatch(selectOne(product));
 };

 return (
  <ProductHoverContainer>
   <label>
    <input
     onClick={(e) => e.stopPropagation()}
     type="checkbox"
     checked={allSelectedId.includes(id)}
     onChange={selectProductHandler}
    />
   </label>
   <ProductHoverButtonContainer isHidden={allSelectedId.includes(id)}>
    <PrimaryButton onClick={() => dispatch(addToCart(product, count || 1))}>
     add to cart
    </PrimaryButton>
   </ProductHoverButtonContainer>
  </ProductHoverContainer>
 );
};
