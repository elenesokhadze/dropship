import {
 ProductPriceContainer,
 ProductPriceItem,
 ProductPriceItemBlue,
} from "./product.styled";

export const ProductPrice = ({price}) => {
 return (
  <ProductPriceContainer>
   <ProductPriceItem>
    <strong>${price}</strong>
    <span>RRP</span>
   </ProductPriceItem>
   |
   <ProductPriceItem>
    <strong>${price}</strong>
    <span>COST</span>
   </ProductPriceItem>
   |
   <ProductPriceItem>
    <ProductPriceItemBlue>${price}</ProductPriceItemBlue>
    <span>PROFIT</span>
   </ProductPriceItem>
  </ProductPriceContainer>
 );
};
