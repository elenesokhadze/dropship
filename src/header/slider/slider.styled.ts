import styled from "styled-components";

export const RangeContainer = styled.div`
 display: flex;
 justify-content: space-between;
 min-width: 224px;
 width: 100%;
`;

export const RangeItem = styled.div`
 font-size: 14px;
 font-weight: 500;
 color: ${({theme}) => theme.colors.primary.blue.shade} !important;
 background-color: ${({theme}) => theme.colors.primary.white.main};
 border-radius: 0 2px 2px 0;
`;

export const RangeSliderContainer = styled.div`
 max-width: 224px;
 width: 100%;
`;

export const SliderOuterContainer = styled.div`
 display: flex;
 gap: 30px;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  display: none;
 }
`;

export const SliderButtonContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 max-width: 48px;
`;
