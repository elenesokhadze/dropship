import {LandingMenuContainer} from "./landingMenu.styled";
import {Link} from "react-router-dom";

const LandingMenu = ({open}) => {
 return (
  <LandingMenuContainer open={open} id="LandingMenuContainer">
   <Link to="/catalog" style={{textDecoration: "none"}}>
    <span>catalog</span>
   </Link>
   <Link to="/register" style={{textDecoration: "none"}}>
    <span>sign up</span>
   </Link>
   <Link to="/login" style={{textDecoration: "none"}}>
    <span>login</span>
   </Link>
  </LandingMenuContainer>
 );
};

export default LandingMenu;
