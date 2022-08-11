import styled from "styled-components";

export const ProductContainer = styled.div`
 flex: 1 320px;
 max-width: 360px;
 border: 2px solid ${({theme}) => theme.colors.primary.grey.main};
 border-radius: 8px;
 background-color: ${({theme}) => theme.colors.primary.white.main};
 display: flex;
 flex-direction: column;
 z-index: 2;
 position: relative;
 box-sizing: content-box;
 padding-bottom: 20px;
 &:hover {
  border: 2px solid ${({theme}) => theme.colors.primary.blue.main};
 }
`;

export const ProductHoverContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px;
 input[type="checkbox"] {
  accent-color: ${({theme}) => theme.colors.primary.blue.main};
  width: 20px;
  height: 20px;
 }
`;

export const ProductImageContainer = styled.div`
 height: 240px;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 padding-bottom: 30px;
 padding-top: 10px;
 img {
  height: 240px;
  width: 220px;
 }
`;

export const ProductBottomContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 35px;
 padding-top: 10px;
`;

export const ProductTitleContainer = styled.div`
 vertical-align: baseline;
 font-size: 14px;
 text-transform: uppercase;
 font-weight: 700;
 margin: 0;
 color: ${({theme}) => theme.colors.primary.blue.shade};
 padding-left: 20px;
 height: 32px;
`;

export const ProductTitleOuterContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 15px;
`;

export const ProductSupplierOuterContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
 padding: 0 20px 0 20px;
`;

export const ProductSupplierContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

export const ProductSupplierButton = styled.div`
 background: none;
 font-size: 14px;
 color: ${({theme}) => theme.colors.primary.blue.main};
 border: none;
 padding: 0;
 cursor: pointer;
 text-decoration: underline;
`;

export const ProductPriceContainer = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 padding: 0;
 font-size: 16px;
 font-weight: 500;
 letter-spacing: 0.14px;
 opacity: 0.7;
 list-style: none;
 color: ${({theme}) => theme.colors.secondary.grey.main};
 margin: 0;
`;

export const ProductPriceItem = styled.div`
 display: flex;
 flex-direction: column;
 gap: 3px;
`;

export const ProductPriceItemBlue = styled.div`
 display: flex;
 flex-direction: column;
 gap: 3px;
 color: ${({theme}) => theme.colors.primary.blue.main};
 font-weight: 700;
`;
