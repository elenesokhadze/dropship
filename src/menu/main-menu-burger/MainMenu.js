import "../menu.css";
import logo from "../../assets/logo.png";
import user from "../../assets/user.jpg";
import {NavLink} from "react-router-dom";
import {
 MenuContainer,
 MenuNav,
 MenuLogo,
 MenuUserImage,
 MenuLink,
} from "./mainMenu.styled";

export const MainMenu = ({open}) => {
 return (
  <MenuContainer id="MenuContainer" open={open}>
   <MenuNav id="MenuNav" open={open}>
    <NavLink to="/catalog">
     <MenuLogo src={logo} alt="dropship" />
    </NavLink>
    <MenuLink to="/user">
     <MenuUserImage src={user} alt="user-image" />
    </MenuLink>
    <MenuLink to="/catalog">
     <i className="fas fa-list-ul"></i>
    </MenuLink>
    <MenuLink to="/cart">
     <i className="fas fa-shopping-cart"></i>
    </MenuLink>
   </MenuNav>
  </MenuContainer>
 );
};
