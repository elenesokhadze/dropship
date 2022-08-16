import Slider from "@material-ui/core/Slider";
import {RangeContainer, RangeItem, RangeSliderContainer} from "./slider.styled";

function valuetext(value) {
 return `${value}`;
}

export default function RangeSlider({handleFilterPrice, value, handleChange}) {
 return (
  <RangeSliderContainer id="RangeSliderContainer">
   <Slider
    value={value}
    onChange={handleChange}
    getAriaValueText={valuetext}
    color="secondary"
    onClick={handleFilterPrice}
    min={0}
    max={1000}
   />
   <RangeContainer id="RangeContainer">
    <div style={{display: "flex", alignItems: "center"}}>
     <RangeItem>$</RangeItem>
     <RangeItem>{value[0]}</RangeItem>
    </div>
    <div style={{display: "flex", alignItems: "center"}}>
     <RangeItem>$</RangeItem>
     <RangeItem>{value[1]}</RangeItem>
    </div>
   </RangeContainer>
  </RangeSliderContainer>
 );
}
