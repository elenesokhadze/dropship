import Search from "./Search";
import Sort from "./Sort";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {selectAll} from "../redux/products/ProductActions";
import {removeAll} from "../redux/products/ProductActions";
import {PrimaryButton} from "../button/PrimaryButton";
import {
 HeaderOuterContainer,
 HeaderContainer,
 HeaderTextContainer,
 HeaderLeftContainer,
 HeaderSelectContainer,
 HeaderRightContainer,
} from "./header.styled";
import {addSelectedToCart} from "../redux/cart/CartActions";

const Header = () => {
 const products = useSelector((state) => state.product.products);
 const selectedProducts = useSelector(
  (state) => state.product.selectedProducts
 );
 const dispatch = useDispatch();
 const selectAllHandler = () => {
  dispatch(selectAll(products));
 };
 const clearAllHandler = () => {
  const clearProducts = [];
  dispatch(removeAll(clearProducts));
 };

 return (
  <HeaderOuterContainer id="HeaderOuterContainer">
   <HeaderContainer id="HeaderContainer">
    <HeaderLeftContainer id="HeaderLeftContainer">
     <HeaderSelectContainer id="HeaderSelectContainer">
      <PrimaryButton onClick={selectAllHandler}>select all</PrimaryButton>
      <HeaderTextContainer id="HeaderTextContainer">
       selected {selectedProducts.length} out of {products.length} products
      </HeaderTextContainer>
      {selectedProducts.length > 0 ? (
       <PrimaryButton onClick={clearAllHandler}>clear selected</PrimaryButton>
      ) : (
       ""
      )}
     </HeaderSelectContainer>
    </HeaderLeftContainer>
    <HeaderRightContainer id="HeaderRightContainer">
     <Search />
     <PrimaryButton
      onClick={() =>
       dispatch(addSelectedToCart(selectedProducts, selectedProducts.length))
      }
     >
      add to cart
     </PrimaryButton>
    </HeaderRightContainer>
   </HeaderContainer>
   <Sort />
  </HeaderOuterContainer>
 );
};

export default Header;
