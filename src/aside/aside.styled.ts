import styled from "styled-components";

export const AsideContainer = styled.div`
 width: 260px;
 background-color: #ecedf5;
 height: 100%;
 position: fixed;
 margin-left: 56px;
`;

export const DropdownOuterContainer = styled.div`
 min-width: 160px;
 max-width: 257px;
 box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
 background: #fff;
`;

export const DropdownContainer = styled.select`
 background: #fff;
 border-radius: 4px;
 border-right: 16px solid #fff;
 height: 40px;
 overflow: hidden;
 border-bottom: 1px solid #dbe0f3;
 width: 232px;
 cursor: pointer;
 border: none;
 box-sizing: border-box;
 color: #29304b;
 font-size: 100%;
 padding-left: 10px;
 margin-right: 10px;
`;

export const AsideMenuContainer = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 gap: 10px;
 padding-top: 20px;
`;

export const CategoryDropdownContainer = styled.select<{isLightBlue: Boolean}>`
 height: 60px;
 color: #fff;
 display: flex;
 flex-direction: column;
 justify-content: center;
 padding-top: 15px;
 padding-left: 20px;
 font-weight: bolder;
 width: 260px;
 border: none;
 font-size: 15px;
 border-right: 16px solid transparent;
 background-color: #5d6b9f;
 ${(props) =>
  props.isLightBlue &&
  `   background-color: #9da9d5;
    `}
`;

export const SliderOuterContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 30px;
 padding-top: 15%;
`;

export const SliderInnerContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
 justify-content: center;
 align-items: center;
`;

export const SliderTextContainer = styled.div`
 font-family: Gilroy !important;
 display: inline-block;
 font-weight: 600;
 color: #323949;
 font-size: 12px;
`;

export const RangeSliderContainer = styled.div`
 font-family: Gilroy !important;
 display: inline-block;
 font-weight: 600;
 color: #323949;
 font-size: 12px;
`;

export const RangeContainer = styled.div`
 display: flex;
 justify-content: space-between;
`;

export const RangeItem = styled.div<{isSmall: Boolean}>`
 top: 8px;
 font-family: Gilroy;
 font-size: 13px !important;
 font-weight: 500 !important;
 padding-right: 10px;
 color: #65737e !important;
 display: -webkit-box;
 display: flex;
 -webkit-box-align: center;
 align-items: center;
 min-width: 36px;
 height: 26px;
 background-color: #fff;
 align-items: center;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-transform: translateX(-1px);
 transform: translateX(-1px);
 border-radius: 0 2px 2px 0;
 ${(props) =>
  props.isSmall &&
  `   
  min-width: 19px;
  height: 26px;
  border-right: solid 1px #ecedf5;
    `}
`;
