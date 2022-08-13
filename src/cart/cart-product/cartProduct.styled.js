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
`;

export const CartProductImageContainer = styled.div`
 flex: 1;
 img {
  max-width: 120px;
  width: 100%;
 }
`;

export const CartProductItemContainer = styled.div`
 flex: 1;
 text-align: center;
`;

export const ProductCounterContainer = styled.div`
 ${(props) =>
  props.visibilityHidden &&
  `   
visibility: hidden;
      `}
`;
