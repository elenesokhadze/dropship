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
 HeaderNavContainer,
 HeaderSelectContainer,
} from "./header.styled";

const Header = () => {
 const products = useSelector((state) => state.product.products);
 const selectedProducts = useSelector(
  (state) => state.product.selectedProducts
 );
 const dispatch = useDispatch();
 const selectAllHandler = () => {
  const allProductsId = products.map((product) => product.id);
  dispatch(selectAll(allProductsId));
 };
 const clearAllHandler = () => {
  const clearProducts = [];
  dispatch(removeAll(clearProducts));
 };
 return (
  <HeaderOuterContainer>
   <HeaderContainer>
    <HeaderNavContainer>
     <HeaderSelectContainer>
      <PrimaryButton onClick={selectAllHandler}>select all</PrimaryButton>
      <HeaderTextContainer>
       selected {selectedProducts.length} out of {products.length} products
      </HeaderTextContainer>
      {selectedProducts.length > 0 ? (
       <PrimaryButton onClick={clearAllHandler}>clear selected</PrimaryButton>
      ) : (
       ""
      )}
     </HeaderSelectContainer>
    </HeaderNavContainer>
    <Search />
   </HeaderContainer>
   <Sort />
  </HeaderOuterContainer>
 );
};

export default Header;
