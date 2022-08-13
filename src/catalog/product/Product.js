import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {ProductHover} from "./ProductHover";
import {
 ProductBottomContainer,
 ProductContainer,
 ProductImageContainer,
 ProductTitleContainer,
 ProductTitleOuterContainer,
 ProductSupplierOuterContainer,
 ProductSupplierContainer,
 ProductSupplierButton,
} from "./product.styled.ts";
import {ProductPrice} from "./ProductPrice";

const Product = ({title, price, image, product, id, onOpen, index}) => {
 const [active, setActive] = useState(false);

 const selectedProducts = useSelector(
  (state) => state.product.selectedProducts
 );

 const allSelectedId = selectedProducts.map((product) => product.id);

 useEffect(() => {
  if (allSelectedId.includes(id)) {
   setActive(true);
  }
 }, [id, allSelectedId]);
 return (
  <ProductContainer
   onMouseEnter={() => {
    setActive(true);
   }}
   onMouseLeave={() => {
    if (!allSelectedId.includes(id)) {
     setActive(false);
    }
   }}
  >
   {active ? <ProductHover id={id} /> : <div style={{height: "60px"}} />}
   <div onClick={() => onOpen(product.id)}>
    <ProductImageContainer>
     <img src={image} alt={image} />
    </ProductImageContainer>
    <ProductBottomContainer>
     <ProductTitleOuterContainer>
      <ProductTitleContainer>{title}</ProductTitleContainer>
      <ProductSupplierOuterContainer>
       <ProductSupplierContainer>
        <ProductSupplierButton>By: PL-Supplier149</ProductSupplierButton>
       </ProductSupplierContainer>
      </ProductSupplierOuterContainer>
     </ProductTitleOuterContainer>
     <ProductPrice price={price} />
    </ProductBottomContainer>
   </div>
  </ProductContainer>
 );
};

export default Product;
