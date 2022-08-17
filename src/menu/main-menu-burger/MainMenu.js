import "../menu.css";
import logo from "../../assets/logo.png";
import user from "../../assets/user.jpg";
import {Link} from "react-router-dom";
import {
 MenuContainer,
 MenuNav,
 MenuItemCircled,
 MenuLogo,
 MenuUserImage,
} from "./mainMenu.styled";

export const MainMenu = ({open}) => {
 return (
  <MenuContainer id="MenuContainer" open={open}>
   <MenuNav open={open}>
    <Link to="/">
     <MenuLogo src={logo} alt="dropship" />
    </Link>
    <Link to="/user">
     <MenuItemCircled>
      <MenuUserImage src={user} alt="user-image" />
     </MenuItemCircled>
    </Link>
    <Link to="/catalog">
     <i className="fas fa-list-ul"></i>
    </Link>
    <Link to="/cart">
     <i className="fas fa-shopping-cart"></i>
    </Link>
   </MenuNav>
  </MenuContainer>
 );
};
