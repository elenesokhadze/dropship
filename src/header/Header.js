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
 HeaderRightDesktop,
 HeaderSelectContainer,
 HeaderRightContainer,
 MobileSelectButton,
 HeaderLeftDesktop,
 HeaderLeftMobile,
 MobileAddContainer,
 HeaderRightMobile,
} from "./header.styled";
import {addSelectedToCart} from "../redux/cart/CartActions";
import {theme} from "../theme";
import {useState} from "react";

const Header = () => {
 const [isSelectOpen, setIsSelectOpen] = useState(true);
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

 const handleSelectMobile = () => {
  setIsSelectOpen(!isSelectOpen);
  isSelectOpen ? selectAllHandler() : clearAllHandler();
 };

 return (
  <HeaderOuterContainer id="HeaderOuterContainer">
   <HeaderContainer id="HeaderContainer">
    <HeaderLeftContainer id="HeaderLeftContainer">
     <HeaderSelectContainer id="HeaderSelectContainer">
      <HeaderLeftMobile id="HeaderLeftMobile">
       <MobileSelectButton id="MobileSelectButton" onClick={handleSelectMobile}>
        <i
         className="fa fa-check"
         aria-hidden="true"
         style={{color: theme.colors.primary.white.main}}
        />
       </MobileSelectButton>
      </HeaderLeftMobile>
      <HeaderLeftDesktop id="HeaderLeftDesktop">
       <PrimaryButton onClick={selectAllHandler}>select all</PrimaryButton>
       <HeaderTextContainer id="HeaderTextContainer">
        selected {selectedProducts.length} out of {products.length} products
       </HeaderTextContainer>
       {selectedProducts.length > 0 ? (
        <PrimaryButton onClick={clearAllHandler}>clear selected</PrimaryButton>
       ) : (
        ""
       )}
      </HeaderLeftDesktop>
     </HeaderSelectContainer>
    </HeaderLeftContainer>
    <HeaderRightContainer id="HeaderRightContainer">
     <HeaderRightDesktop id="HeaderRightDesktop">
      <Search />
      <PrimaryButton
       onClick={() =>
        dispatch(addSelectedToCart(selectedProducts, selectedProducts.length))
       }
      >
       add to cart
      </PrimaryButton>
     </HeaderRightDesktop>
     <HeaderRightMobile>
      <Search />
      <MobileAddContainer
       id="MobileAddContainer"
       onClick={() =>
        dispatch(addSelectedToCart(selectedProducts, selectedProducts.length))
       }
      >
       add
      </MobileAddContainer>
     </HeaderRightMobile>
    </HeaderRightContainer>
   </HeaderContainer>
   <Sort />
  </HeaderOuterContainer>
 );
};

export default Header;
