import {Link} from "react-router-dom";
import {
 LandingLogoContainer,
 LandingHeaderContainer,
 LandingHeaderNav,
 LandingPageNavItem,
 LandingPageNavItemSignup,
} from "./landingPage.styled";
import LogoWhite from "../assets/logo-white.png";
import {LandingHeaderBurger} from "./landing-header-burger/LandingHeaderBurger";

export const LandingHeader = () => {
 return (
  <LandingHeaderContainer id="LandingHeaderContainer">
   <LandingLogoContainer id="LandingLogoContainer">
    <img src={LogoWhite} alt="headerlogo" />
   </LandingLogoContainer>
   <LandingHeaderNav id="LandingHeaderNav">
    <Link to="/catalog">
     <LandingPageNavItem>catalog</LandingPageNavItem>
    </Link>
    <Link to="/register">
     <LandingPageNavItemSignup>sign up</LandingPageNavItemSignup>
    </Link>
    <Link to="/login">
     <LandingPageNavItem isLogin={true}>login</LandingPageNavItem>
    </Link>
   </LandingHeaderNav>
   <LandingHeaderBurger />
  </LandingHeaderContainer>
 );
};
