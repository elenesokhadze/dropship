import styled from "styled-components";

export const HeaderOuterContainer = styled.div`
 position: fixed;
 z-index: 1000;
 background-color: #f8f9fa;
 width: 83%;
 margin-left: 320px;
`;

export const HeaderContainer = styled.div`
 display: flex;
 justify-content: space-between;
 gap: 20px;
 height: 70px;
`;

export const HeaderTextContainer = styled.div`
 border-left: 1px solid #dbdcdd;
 padding: 5px;
`;

export const HeaderNavContainer = styled.div`
 display: flex;
 justify-content: space-between;
 padding-left: 2%;
`;

export const HeaderSelectContainer = styled.div`
 display: flex;
 gap: 10px;
 align-items: center;
 font-size: 12px !important;
 color: #29304b;
`;

export const SearchContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
 padding-right: 3%;
`;

export const SearchButton = styled.button`
 background-repeat: no-repeat;
 background-size: cover;
 transform: translateX(-45%);
 border: solid 2px #ecedf5;
 border-left: none;
 background-color: #fff;
 border-radius: 12px;
 color: #d6d4d4;
 cursor: pointer;
`;

export const SearchInputContainer = styled.form`
 display: flex;
 width: 435px;
`;
export const SearchInput = styled.input`
 border: solid 2px #ecedf5;
 height: 33px;
 width: 450px;
 padding-left: 3%;
 border-radius: 12px;
 &:focus {
  outline: none;
 }
`;

export const FaqContainer = styled.div`
 cursor: pointer;
 margin-right: 120px;
`;

export const SortContainer = styled.div`
 background-color: #fff;
 height: 35px;
 display: flex;
 align-items: center;
 padding-left: 4%;
 gap: 5px;
 width: 100%;
 padding-top: 1%;
 border-bottom: 2px solid #dbe0f3;
`;

export const SortSelect = styled.select`
 font-family: Gilroy-regular;
 color: #aba7a7;
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
 background-color: #edf2fb !important;
 color: #333;
 width: 500px;
 border: 2px solid red !important;
`;

//   .nav__icon {
//     color: #aba7a7;
//   }

//   .fa-sort {
//     color: #aba7a7 !important;
//   }

//   #sort * {
//     border-radius: 15px;
//     background-color: red;
//   }
