import styled from "styled-components";

export const LandingLogoContainer = styled.div`
 img {
  color: transparent;
  max-width: 100%;
 }
`;

export const LandingHeaderContainer = styled.div`
 display: flex;
 height: 60px;
 background-color: ${({theme}) => theme.colors.primary.blue.shade};
 justify-content: space-around;
 align-items: center;
 position: fixed;
 z-index: 10;
 width: 100%;
 opacity: 0.7;
`;

export const LandingHeaderNav = styled.div`
 display: flex;
 gap: 30px;
`;

export const LandingImageContainer = styled.div`
 height: 100vh;
 width: 100%;
 img {
  height: 100%;
 }
`;
export const LandingSignupContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 40px;
`;

export const LandingContentContainer = styled.div`
 padding: 40px;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: ${({theme}) => theme.colors.primary.blue.shade};
 opacity: 0.7;
 flex-direction: column;
 font-weight: 400;
 font-size: 28px;
 color: ${({theme}) => theme.colors.primary.white.main};
 gap: 10px;
 img {
  margin-bottom: 30px;
 }
`;

export const LandingContentTitle = styled.h4`
 margin: 0;
 font-weight: 400;
 font-size: 28px;
`;

export const LandingBannerContainer = styled.div`
 position: absolute;
 max-width: 900px;
 width: 100%;
 top: calc(50% + 50px);
 left: 50%;
 transform: translate(-50%, -50%);
`;

export const LandingPageNavItem = styled.button<{isLogin: boolean}>`
 background: none;
 border: 0;
 padding: 0;
 color: ${({theme}) => theme.colors.primary.white.main};
 font-weight: bold;
 font-size: 14px;
 line-height: 20px;
 letter-spacing: -0.5px;
 text-transform: uppercase;
 cursor: pointer;
 height: 100%;
 &:hover {
  color: ${({theme}) => theme.colors.secondary.blue.main};
 }
 ${(props) => props.isLogin && `color:  #61d5df`}
`;

export const LandingPageNavItemSignup = styled.button`
 height: 50px;
 width: 120px;
 border-radius: 4px;
 border: solid 2px ${({theme}) => theme.colors.secondary.blue.main};
 transition: all 0.5s;
 cursor: pointer;
 box-sizing: border-box;
 text-decoration: none;
 font-weight: bold;
 font-size: 14px;
 line-height: 20px;
 letter-spacing: -0.5px;
 color: ${({theme}) => theme.colors.primary.white.main};
 background-color: transparent;
 text-transform: uppercase;
 &:hover {
  border-radius: 4px;
  border: solid 2px #61d5df;
  color: ${({theme}) => theme.colors.primary.white.main};
  transition: all 0.5s;
  background-color: ${({theme}) => theme.colors.secondary.blue.main};
 }
`;
