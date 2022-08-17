import styled from "styled-components";

export const HeaderOuterContainer = styled.div`
 background-color: ${({theme}) => theme.colors.primary.grey.tint};
 width: calc(100% - 48px);
 margin-left: 48px;
 box-sizing: border-box;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  margin-left: 0;
  width: 100%;
 }
`;

export const MobileSelectButton = styled.div`
 display: none;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  background-color: ${({theme}) => theme.colors.secondary.blue.main};
  height: 32px;
  width: 32px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
 }
`;

export const MobileAddContainer = styled.div`
 display: none;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  margin-right: 24px;
  display: flex;
  border-radius: 4px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.primary.white.main};
  background-color: ${({theme}) => theme.colors.secondary.blue.main};
  text-transform: uppercase;
  cursor: pointer;
 }
`;

export const HeaderContainer = styled.div`
 display: flex;
 justify-content: space-between;
 gap: 20px;
 height: 70px;
 padding: 0 40px;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  display: flex;
  justify-content: initial;
 }
`;

export const HeaderTextContainer = styled.div`
 border-left: 1px solid ${({theme}) => theme.colors.primary.grey.shade};
 padding: 5px;
`;

export const HeaderLeftContainer = styled.div`
 display: flex;
 justify-content: space-between;
`;

export const HeaderLeftMobile = styled.div`
 display: none;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
 }
`;

export const HeaderRightMobile = styled.div`
 display: none;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
 }
`;

export const HeaderLeftDesktop = styled.div`
 display: flex;
 gap: 24px;
 align-items: center;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  display: none;
 }
`;

export const HeaderRightDesktop = styled.div`
 display: flex;
 align-items: center;
 gap: 24px;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  display: none;
 }
`;
export const HeaderSelectContainer = styled.div`
 display: flex;
 gap: 10px;
 align-items: center;
 font-size: 12px !important;
 color: ${({theme}) => theme.colors.primary.blue.shade};
`;

export const HeaderRightContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
`;

export const SearchButton = styled.button`
 border: 0;
 background: none;
 color: ${({theme}) => theme.colors.primary.grey.shade};
 position: absolute;
 top: 50%;
 transform: translate(0, -50%);
 right: 8px;
 cursor: pointer;
`;

export const SearchInputContainer = styled.form`
 position: relative;
 display: flex;
 max-width: 435px;
 width: 100%;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  max-width: 100%;
 }
`;
export const SearchInput = styled.input`
 border: solid 2px ${({theme}) => theme.colors.primary.grey.main};
 height: 32px;
 max-width: 450px;
 width: 100%;
 padding-left: 16px;
 border-radius: 12px;
 &:focus {
  outline: none;
 }
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  max-width: 100%;
 }
`;

export const SortContainer = styled.div`
 background-color: ${({theme}) => theme.colors.primary.white.main};
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 8px;
 width: 100%;
 padding: 24px 40px;
 border-bottom: 2px solid ${({theme}) => theme.colors.primary.grey.shade};
 box-sizing: border-box;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  justify-content: center;
  padding: 8px 40px;
 }
`;

export const SortSelect = styled.select`
 font-family: Gilroy-regular;
 color: ${({theme}) => theme.colors.secondary.grey.main};
 font-size: 15px !important;
 font-weight: 400;
 background-color: transparent;
 border: none;
 outline: none;
 font-weight: 500;
 cursor: pointer;
 -webkit-appearance: none;
 -moz-appearance: none;
 appearance: none; /* Remove default arrow */
 width: 180px;
 padding: 20px;
`;

export const SortOption = styled.option`
 background-color: ${({theme}) => theme.colors.primary.grey.main} !important;
 color: ${({theme}) => theme.colors.secondary.grey.main};
 width: 500px;
`;
