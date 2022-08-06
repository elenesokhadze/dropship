import SliderContainer from "./SliderContainer";
import {
 DropdownContainer,
 DropdownOuterContainer,
 AsideMenuContainer,
 CategoryDropdownContainer,
 AsideContainer,
} from "./aside.styled.ts";

const Aside = () => {
 return (
  <AsideContainer>
   <DropdownOuterContainer>
    <CategoryDropdownContainer>
     <option>Choose Niche</option>
     <option value="electronics">Electronics</option>
     <option value="jewelery">Jewelery</option>
     <option value="men's clothing">Men's Clothing</option>
     <option value="women's clothing">Women's Clothing</option>
    </CategoryDropdownContainer>
   </DropdownOuterContainer>
   <DropdownOuterContainer>
    <CategoryDropdownContainer isLightBlue>
     <option>Choose Category</option>
     <option>Australia</option>
     <option>China</option>
     <option>France</option>
    </CategoryDropdownContainer>
   </DropdownOuterContainer>
   <AsideMenuContainer>
    <DropdownOuterContainer>
     <DropdownContainer>
      <option>Ship From</option>
      <option>Australia</option>
      <option>China</option>
      <option>France</option>
     </DropdownContainer>
    </DropdownOuterContainer>
    <DropdownOuterContainer>
     <DropdownContainer>
      <option>Ship To</option>
      <option>Australia</option>
      <option>China</option>
      <option>France</option>
     </DropdownContainer>
    </DropdownOuterContainer>
    <DropdownOuterContainer>
     <DropdownContainer>
      <option>Select Supplier</option>
      <option>Australia</option>
      <option>China</option>
      <option>France</option>
     </DropdownContainer>
    </DropdownOuterContainer>
   </AsideMenuContainer>
   <SliderContainer />
  </AsideContainer>
 );
};

export default Aside;
