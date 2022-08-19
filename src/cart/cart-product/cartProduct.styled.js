import styled from "styled-components";

export const CartProductContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 align-items: center;
 width: 100%;
 height: 160px;
 box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%),
  0px 1px 8px 0px rgb(0 0 0 / 12%);
 overflow: hidden;
 padding-left: 2%;
 min-height: 240px;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  justify-content: initial;
  width: 100%;
  gap: 80px;
  overflow-x: scroll;
  flex-wrap: nowrap;
  padding: 0 40px;
 }
`;

export const CartProductImageContainer = styled.div`
 flex: 1;
 img {
  max-width: 120px;
  width: 100%;
 }
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  img {
   min-width: 120px;
  }
  min-width: 120px;
 }
`;

export const CartProductItemContainer = styled.div`
 flex: 1;
 text-align: center;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  text-align: left;
  min-width: 120px;
 }
`;

export const ProductCounterContainer = styled.div`
 ${(props) =>
  props.visibilityHidden &&
  `   
visibility: hidden;
      `}
`;
