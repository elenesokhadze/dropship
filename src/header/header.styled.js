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

export const HeaderContainer = styled.div`
 display: flex;
 justify-content: space-between;
 gap: 20px;
 height: 70px;
 padding: 0 40px;
`;

export const HeaderTextContainer = styled.div`
 border-left: 1px solid ${({theme}) => theme.colors.primary.grey.shade};
 padding: 5px;
`;

export const HeaderLeftContainer = styled.div`
 display: flex;
 justify-content: space-between;
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
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  display: none;
 }
`;

export const SearchButton = styled.button`
 background-repeat: no-repeat;
 background-size: cover;
 transform: translateX(-45%);
 border: solid 2px ${({theme}) => theme.colors.primary.grey.main};
 border-left: none;
 background-color: ${({theme}) => theme.colors.primary.white.main};
 border-radius: 12px;
 color: ${({theme}) => theme.colors.primary.grey.shade};
 cursor: pointer;
`;

export const SearchInputContainer = styled.form`
 display: flex;
 width: 435px;
`;
export const SearchInput = styled.input`
 border: solid 2px ${({theme}) => theme.colors.primary.grey.main};
 height: 33px;
 width: 450px;
 padding-left: 3%;
 border-radius: 12px;
 &:focus {
  outline: none;
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
