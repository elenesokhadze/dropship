import {useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {selectAll} from "../redux/products/ProductActions";
import {removeAll} from "../redux/products/ProductActions";
import {PrimaryButton} from "../button/PrimaryButton";
import {
 HeaderTextContainer,
 HeaderLeftContainer,
 HeaderSelectContainer,
 MobileSelectButton,
 HeaderLeftDesktop,
 HeaderLeftMobile,
} from "./header.styled";
import {theme} from "../theme";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export const HeaderLeft = () => {
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
  <HeaderLeftContainer id="HeaderLeftContainer">
   <HeaderSelectContainer id="HeaderSelectContainer">
    <HeaderLeftMobile id="HeaderLeftMobile">
     <MobileSelectButton id="MobileSelectButton" onClick={handleSelectMobile}>
      <CheckCircleIcon style={{color: theme.colors.primary.white.main}} />
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
 );
};
