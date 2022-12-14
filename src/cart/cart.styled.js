import styled from "styled-components";

export const CartContainer = styled.div`
 display: flex;
 width: 97%;
 margin-left: 3%;
 flex-direction: column;
 background-color: ${({theme}) => theme.colors.primary.grey.tint};
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  margin: 0;
  width: 100%;
 }
`;
export const CartHeadingContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 padding: 0 40px;
 border-bottom: 2px solid ${({theme}) => theme.colors.primary.grey.shade};
 height: 74px;
 text-transform: uppercase;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  padding: 0 24px;
 }
`;

export const CartHeaderContainer = styled.div`
 display: flex;
 align-items: center;
 height: 100%;
 justify-content: space-around;
 color: ${({theme}) => theme.colors.primary.blue.shade};
 box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%),
  0px 1px 8px 0px rgb(0 0 0 / 12%);
 transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
 background: ${({theme}) => theme.colors.primary.white.main};
 margin: 16px;
 height: 80px;
 font-weight: 600;
 text-transform: uppercase;
 text-align: center;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  justify-content: initial;
  width: 100%;
  gap: 80px;
  overflow-y: scroll;
  padding: 0 24px;
  margin: 16px 0;
 }
`;

export const CartHeaderItemContainer = styled.div`
 flex: 1;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  min-width: 120px;
 }
`;

export const CartBodyContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
 align-items: flex-start;
 justify-content: flex-start;
 width: 94%;
 background-color: ${({theme}) => theme.colors.primary.white.main};
 margin-left: 3%;
 overflow-y: auto;
 height: calc(100vh - 308px);
 overflow-x: hidden;
`;

export const CartFooterContainer = styled.div`
 display: flex;
 height: 100%;
 align-items: center;
 padding: 0 40px;
 font-weight: 600;
 justify-content: space-between;
 color: ${({theme}) => theme.colors.primary.blue.shade};
 box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%),
  0px 1px 8px 0px rgb(0 0 0 / 12%);
 transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
 background: ${({theme}) => theme.colors.primary.white.main};
 margin: 16px;
 height: 80px;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  gap: 80px;
  overflow-y: scroll;
  padding: 0 24px;
 }
`;

export const CartFooterPriceContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 20px;
 padding-right: 60px;
 margin-right: initial;
 font-size: 18px;
 color: ${({theme}) => theme.colors.primary.blue.shade};
 text-transform: uppercase;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  gap: 80px;
  font-size: 14px;
  padding: 0;
  div {
   min-width: 120px;
  }
 }
`;

export const CartFooterPriceItem = styled.span`
 color: ${({theme}) => theme.colors.primary.blue.tint};
`;
