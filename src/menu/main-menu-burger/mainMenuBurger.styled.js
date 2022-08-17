import styled from "styled-components";

export const MainBurgerContainer = styled.div`
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  display: block;
  position: absolute;
  right: 40px;
  top: 20px;
  z-index: 1000;
 }
`;

export const MainBurgerInnerContainer = styled.div`
 display: none;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  display: block;
  transform: translate(24px);
 }
`;
