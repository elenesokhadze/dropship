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
`;

export const ModalImageContainer = styled.div`
 display: flex;
 justify-content: center;
 &:hover {
  transform: scale(1.2);
 }
 img {
  width: 336px;
  height: 336px;
 }
`;

export const ModalItem = styled.li`
 display: flex;
 flex-direction: column;
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
`;

export const ModalDescriptionContainer = styled.div`
 line-height: 1.63;
 color: ${({theme}) => theme.colors.secondary.grey.main};
 font-size: 16px;
 display: flex;
 justify-content: space-between;
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
`;

export const ModalTabsContainer = styled.div`
 display: flex;
 gap: 35px;
`;

export const ModalDialogLeftContainer = styled.div`
 width: min(499px, 50%);
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding: 20px;
 gap: 30px;
`;

export const ModalDialogRightContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
 padding: 20px;
 width: min(656px, 50%);
`;
