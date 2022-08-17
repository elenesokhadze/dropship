import {BurgerMenuContainer} from "./burgerMenu.styled";

const BurgerMenu = ({open, setOpen, isDark}) => {
 return (
  <BurgerMenuContainer
   open={open}
   onClick={() => setOpen(!open)}
   id="BurgerMenuContainer"
   isDark={isDark}
  >
   <div />
   <div />
   <div />
  </BurgerMenuContainer>
 );
};

export default BurgerMenu;
