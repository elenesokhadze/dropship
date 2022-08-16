import {BurgerMenuContainer} from "./burgerMenu.styled";

const BurgerMenu = ({open, setOpen}) => {
 return (
  <BurgerMenuContainer
   open={open}
   onClick={() => setOpen(!open)}
   id="BurgerMenuContainer"
  >
   <div />
   <div />
   <div />
  </BurgerMenuContainer>
 );
};

export default BurgerMenu;
