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
  <MenuContainer>
   <MenuNav>
    <Link to="/">
     <li>
      <MenuLogo src={logo} alt="dropship" />
     </li>
    </Link>
    <Link to="/user">
     <MenuItemCircled>
      <MenuUserImage src={user} alt="user-image" />
     </MenuItemCircled>
    </Link>
    <Link to="/catalog">
     <li>
      <i className="fas fa-list-ul"></i>
     </li>
    </Link>
    <Link to="/cart">
     <li>
      <i className="fas fa-shopping-cart"></i>
     </li>
    </Link>
   </MenuNav>
  </MenuContainer>
 );
};

export default Menu;
