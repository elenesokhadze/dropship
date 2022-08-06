import {useState} from "react";
import RangeSlider from "./RangeSlider";
import {filterProducts} from "../redux/products/ProductActions";
import {useDispatch, useSelector} from "react-redux";
import {PrimaryButton} from "../button/PrimaryButton";
import {SliderOuterContainer, SliderInnerContainer} from "./aside.styled";

const SliderContainer = () => {
 const products = useSelector((state) => state.product.products);
 const allProducts = useSelector((state) => state.product.allProducts);

 const [value, setValue] = useState([0, 1000]);

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };
 const dispatch = useDispatch();

 const handleFilterPrice = (event) => {
  event.stopPropagation();
  const filteredProducts = products.filter((product) => {
   return product.price >= value[0] && product.price <= value[1];
  });
  console.log(filterProducts(filteredProducts));
  dispatch(filterProducts(filteredProducts));
 };
 const resethandleFilterPrice = () => {
  setValue([0, 1000]);
  dispatch(filterProducts(allProducts));
 };

 return (
  <SliderOuterContainer>
   <SliderInnerContainer>
    <RangeSlider
     text="PRICE RANGE"
     handleFilterPrice={handleFilterPrice}
     value={value}
     handleChange={handleChange}
    />
    <RangeSlider
     text="PROFIT RANGE"
     handleFilterPrice={handleFilterPrice}
     value={value}
     handleChange={handleChange}
    />
   </SliderInnerContainer>
   <div
    style={{display: "flex", justifyContent: "center", alignItems: "center"}}
   >
    <PrimaryButton onClick={resethandleFilterPrice}>reset filter</PrimaryButton>
   </div>
  </SliderOuterContainer>
 );
};

export default SliderContainer;
