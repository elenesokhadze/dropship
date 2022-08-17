import styled from "styled-components";

export const ModalContainer = styled.div`
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 background-color: ${({theme}) => theme.colors.primary.white.main};
 z-index: 1000;
 max-width: 1120px;
 width: 100%;
 border-radius: 16px;
 padding: 32px 32px 72px 32px;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  box-sizing: border-box;
  height: 100vh;
  border-radius: 0;
 }
`;

export const OverlayContainer = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, 0.7);
 z-index: 1000;
`;

export const ModalDialogContainer = styled.div`
 background: ${({theme}) => theme.colors.primary.white.main};
 display: flex;
 gap: 20px;
 padding: 20px;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  flex-direction: column;
  padding: 0;
  gap: 40px;
 }
`;

export const ModalImageContainer = styled.div`
 display: flex;
 justify-content: center;
 &:hover {
  transform: scale(1.2);
 }
 img {
  max-width: 336px;
  width: 100%;
  height: auto;
 }
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  max-width: 184px;
  align-self: center;
  &:hover {
   transform: scale(1);
  }
 }
`;

export const ModalItem = styled.li`
 display: flex;
 flex-direction: column;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  font-size: 16px;
 }
`;

export const ModalPriceContaner = styled.ul`
 display: flex;
 font-size: 22px;
 gap: 80px;
 list-style: none;
 border-radius: 7px;
 box-shadow: 0 3px 6px 0 rgb(0 0 0 / 5%);
 background: ${({theme}) => theme.colors.primary.grey.tint};
 border: 1.5px solid ${({theme}) => theme.colors.primary.white.main};
 justify-content: center;
 padding: 0;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  gap: 0;
  justify-content: space-between;
 }
`;

export const ModalItemGrey = styled.span`
 font-size: 14px;
 color: ${({theme}) => theme.colors.secondary.grey.main};
`;

export const ModalItemDarkBlue = styled.span`
 color: ${({theme}) => theme.colors.primary.blue.shade};
 font-weight: bold;
`;

export const ModalItemBlue = styled.span`
 color: ${({theme}) => theme.colors.primary.blue.main};
 font-weight: bold;
`;

export const ModalTitle = styled.div`
 margin-top: 30px;
 font-size: 18px;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  margin-top: 0;
 }
`;

export const ModalDescriptionContainer = styled.div`
 line-height: 1.63;
 color: ${({theme}) => theme.colors.secondary.grey.main};
 font-size: 16px;
 display: flex;
 justify-content: space-between;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  display: none;
 }
`;

export const ModalDetailsContainer = styled.div`
 color: ${({theme}) => theme.colors.secondary.grey.main};
 span {
  word-wrap: break-word;
 }
`;

export const ModalDescriptionSupplier = styled.div`
 display: flex;
 gap: 2px;
`;

export const ModalDescriptionBlue = styled.div`
 color: ${({theme}) => theme.colors.primary.blue.main};
`;

export const ModalCloseContainer = styled.div`
 display: flex;
 justify-content: flex-end;
 cursor: pointer;
 button {
  &:hover {
   background: ${({theme}) => theme.colors.primary.grey.main};
  }
 }
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  position: absolute;
  top: 16px;
  right: 16px;
 }
`;

export const ModalTabsContainer = styled.div`
 display: flex;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  font-size: 16px;
  padding: 20px 0;
 }
`;

export const ModalDialogLeftContainer = styled.div`
 width: min(499px, 50%);
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding: 20px;
 gap: 30px;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  padding: 0;
  width: 100%;
  gap: 0;
 }
`;

export const ModalDialogRightContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
 padding: 20px;
 width: min(656px, 50%);
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  padding: 0;
  width: 100%;
  gap: 8px;
 }
`;
