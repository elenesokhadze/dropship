import Slider from "@material-ui/core/Slider";
import {SliderTextContainer, RangeContainer, RangeItem} from "./aside.styled";

function valuetext(value) {
 return `${value}`;
}

export default function RangeSlider({
 text,
 handleFilterPrice,
 value,
 handleChange,
}) {
 return (
  <div style={{width: "223px"}}>
   <SliderTextContainer>{text}</SliderTextContainer>
   <Slider
    value={value}
    onChange={handleChange}
    getAriaValueText={valuetext}
    color="secondary"
    onClick={handleFilterPrice}
    min={0}
    max={1000}
   />
   <RangeContainer>
    <div style={{display: "flex"}}>
     <RangeItem isSmall>$</RangeItem>
     <RangeItem>{value[0]}</RangeItem>
    </div>
    <div style={{display: "flex"}}>
     <RangeItem>$</RangeItem>
     <RangeItem isSmall>{value[1]}</RangeItem>
    </div>
   </RangeContainer>
  </div>
 );
}
