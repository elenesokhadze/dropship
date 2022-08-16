import "./menu.css";
import logo from "../assets/logo.png";
import user from "../assets/user.jpg";
import {Link} from "react-router-dom";
import {
 MenuContainer,
 MenuNav,
 MenuItemCircled,
 MenuLogo,
 MenuUserImage,
} from "./menu.styled";

const Menu = () => {
 return (
  <MenuContainer id="MenuContainer">
   <MenuNav>
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

export default Menu;
