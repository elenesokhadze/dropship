import styled from "styled-components";

export const ModalContainer = styled.div`
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 background-color: #fff;
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
 background: #fff;
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
 background: #fafafa;
 border: 1.5px solid #fff;
 justify-content: center;
 padding: 0;
`;

export const ModalItemGrey = styled.span`
 font-size: 14px;
 color: #707070;
`;

export const ModalItemBlue = styled.span`
 color: #61d5df;
 font-weight: bold;
`;

export const ModalTitle = styled.div`
 margin-top: 30px;
`;

export const ModalDescriptionContainer = styled.div`
 line-height: 1.63;
 color: rgba(112, 112, 112, 0.7);
 font-size: 16px;
 display: flex;
 justify-content: space-between;
`;

export const ModalDetailsContainer = styled.div`
 color: #707070;
 span {
  word-wrap: break-word;
 }
`;

export const ModalDescriptionSupplier = styled.div`
 display: flex;
 gap: 2px;
`;

export const ModalDescriptionBlue = styled.div`
 color: #61d5df;
`;

export const ModalCloseContainer = styled.div`
 display: flex;
 justify-content: flex-end;
 cursor: pointer;
 button {
  &:hover {
   background: #ecedf5;
  }
 }
`;

export const ModalButtonContainer = styled.div`
 display: flex;
 justify-content: flex-end;
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
