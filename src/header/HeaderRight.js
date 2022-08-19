import Search from "./Search";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {PrimaryButton} from "../button/PrimaryButton";
import {
 HeaderRightDesktop,
 HeaderRightContainer,
 MobileAddContainer,
 HeaderRightMobile,
} from "./header.styled";
import {addSelectedToCart} from "../redux/cart/CartActions";

export const HeaderRight = () => {
 const selectedProducts = useSelector(
  (state) => state.product.selectedProducts
 );
 const dispatch = useDispatch();

 return (
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
 );
};
