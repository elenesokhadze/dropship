import {useState, useRef, useEffect} from "react";
import {LandingHeaderBurgerContainer} from "../landingPage.styled";
import BurgerMenu from "../../burger/BurgerMenu";
import LandingMenu from "./LandingMenu";

export const LandingHeaderBurger = () => {
 const [open, setOpen] = useState(false);
 const burgerRef = useRef();

 // eslint-disable-next-line no-unused-vars
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
  <LandingHeaderBurgerContainer
   ref={burgerRef}
   id="LandingHeaderBurgerContainer"
  >
   <LandingMenu open={open} />
   <BurgerMenu open={open} setOpen={setOpen} />
  </LandingHeaderBurgerContainer>
 );
};
