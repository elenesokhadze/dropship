import {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import {
 LandingLogoContainer,
 LandingHeaderContainer,
 LandingHeaderNav,
 LandingPageNavItem,
 LandingPageNavItemSignup,
 LandingHeaderBurger,
} from "./landingPage.styled";
import BurgerMenu from "./burger/BurgerMenu";
import LandingMenu from "./burger/LandingMenu";
import LogoWhite from "../assets/logo-white.png";

export const LandingHeader = () => {
 const [open, setOpen] = useState(false);
 const burgerRef = useRef();

 const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
   const listener = (event) => {
    if (!ref.current || ref.current.contains(event.target)) {
     return;
    }
    handler(event);
   };
   document.addEventListener("mousedown", listener);

   return () => {
    document.removeEventListener("mousedown", listener);
   };
  }, [ref, handler]);
 };

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
   <LandingHeaderBurger ref={burgerRef} id="LandingHeaderBurger">
    <LandingMenu open={open} />
    <BurgerMenu open={open} setOpen={setOpen} />
   </LandingHeaderBurger>
  </LandingHeaderContainer>
 );
};
