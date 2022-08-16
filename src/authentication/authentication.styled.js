import styled from "styled-components";
import authBackground from "../assets/auth-background.jpg";

export const FormWrapper = styled.div`
 background-image: url(${authBackground});
 background-position: center;
 background-size: cover;
 background-repeat: no-repeat;
 width: 100%;
 height: 900px;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 background-color: ${({theme}) => theme.colors.primary.blue.tint};
 opacity: 0.92 !important;
 z-index: 1;
`;

export const FormDialog = styled.div`
 width: min(420px, 100%);
 background: ${({theme}) => theme.colors.primary.white.main};
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 30px;
 border-radius: 8px;
 padding: 30px 0 30px 0;
 box-shadow: 0 0 12px #6b6b6b;
 @media (max-width: ${({theme}) => `${theme.responsive.mobile}px`}) {
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 2;
  border-radius: 0;
 }
`;

export const FormHeader = styled.div`
 display: flex;
 width: 80%;
 align-items: center;
 flex-direction: row;
 gap: 95px;
 @media (max-width: ${({theme}) => `${theme.responsive.mobile}px`}) {
  position: absolute;
  top: 40px;
 }
`;

export const FormTitle = styled.h3`
 font-size: 18px;
 color: ${({theme}) => theme.colors.primary.blue.shade};
 text-transform: capitalize;
 position: absolute;
 left: 50%;
 transform: translate(-50%, 0);
`;

export const FormLogo = styled.div`
 cursor: pointer;
 img {
  width: 51px;
  height: 30px;
 }
`;

export const BackToSignup = styled.a`
 outline: 0;
 text-decoration: none;
 cursor: pointer;
 color: ${({theme}) => theme.colors.primary.blue.shade};
 font-size: 15px;
 font-weight: 600;
 text-decoration: none;
 font-weight: bold;
`;

export const LoginInfo = styled.span`
 color: rgba(59, 59, 59, 0.72);
 @media (max-width: ${({theme}) => `${theme.responsive.mobile}px`}) {
  position: absolute;
  bottom: 40px;
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 20px;
 }
`;

export const AuthButtonContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
`;
