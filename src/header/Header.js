import Sort from "./Sort";
import {HeaderOuterContainer, HeaderContainer} from "./header.styled";
import {HeaderLeft} from "./HeaderLeft";
import {HeaderRight} from "./HeaderRight";

const Header = () => {
 return (
  <HeaderOuterContainer id="HeaderOuterContainer">
   <HeaderContainer id="HeaderContainer">
    <HeaderLeft />
    <HeaderRight />
   </HeaderContainer>
   <Sort />
  </HeaderOuterContainer>
 );
};

export default Header;
