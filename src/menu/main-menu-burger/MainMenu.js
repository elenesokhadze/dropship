import logo from "../../assets/logo.png";
import user from "../../assets/user.jpg";
import {NavLink} from "react-router-dom";
import {
 MenuContainer,
 MenuNav,
 MenuLogo,
 MenuUserImage,
 MenuLink,
 MenuIconContainer,
} from "./mainMenu.styled";
import ListRoundedIcon from "@material-ui/icons/ListRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";

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
     <MenuIconContainer>
      <ListRoundedIcon />
     </MenuIconContainer>
    </MenuLink>
    <MenuLink to="/cart">
     <MenuIconContainer>
      <ShoppingCartRoundedIcon />
     </MenuIconContainer>
    </MenuLink>
   </MenuNav>
  </MenuContainer>
 );
};
