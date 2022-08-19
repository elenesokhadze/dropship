import styled from "styled-components";

export const UserContainer = styled.div`
 display: flex;
 width: 100%;
 flex-direction: column;
 margin: 0 3%;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  margin: 0;
 }
`;

export const UserInnerContainer = styled.div`
 box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%),
  0px 1px 8px 0px rgb(0 0 0 / 12%);
 transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
 background: ${({theme}) => theme.colors.primary.white.main};
 height: calc(100vh - 150px);
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 0 40px;
`;

export const UserHeading = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 text-transform: uppercase;
 width: 98%;
 padding: 0 40px;
 border-bottom: 2px solid ${({theme}) => theme.colors.primary.grey.tint};
 height: 74px;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  padding: 0 16px;
 }
`;

export const UserDivider = styled.div`
 padding: 32px;
 border-bottom: 2px solid ${({theme}) => theme.colors.primary.grey.tint};
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  display: none;
 }
`;

export const UserInfoContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 gap: 16px;
 flex-direction: column;
 padding: 10px;
 max-width: 500px;
 width: 100%;
`;

export const UserProfileContainer = styled.div`
 border: 6px solid ${({theme}) => theme.colors.secondary.blue.main};
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 6px;
 img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
 }
`;

export const UserTextfieldContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 20px;
 width: 100%;
`;

export const LogoutButtonMobile = styled.div`
 display: none;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  display: block;
 }
`;

export const LogoutButtonDesktop = styled.div`
 display: block;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  display: none;
 }
`;
