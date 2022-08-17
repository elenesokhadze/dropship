import {useState, useRef, useEffect} from "react";
import BurgerMenu from "../../burger/BurgerMenu";
import {
 MainBurgerContainer,
 MainBurgerInnerContainer,
} from "./mainMenuBurger.styled";
import {MainMenu} from "./MainMenu";

export const MainMenuBurger = () => {
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
  <MainBurgerContainer ref={burgerRef} id="MainBurgerContainer">
   <MainMenu open={open} />
   <MainBurgerInnerContainer id="MainBurgerInnerContainer">
    <BurgerMenu open={open} setOpen={setOpen} isDark={true} />
   </MainBurgerInnerContainer>
  </MainBurgerContainer>
 );
};
