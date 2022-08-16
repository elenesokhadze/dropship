import styled from "styled-components";

export const CatalogContainer = styled.div`
 width: calc(100% - 48px);
 margin-left: 48px;
 margin-top: 16px;
 padding: 0 40px;
 box-sizing: border-box;
 overflow-y: auto;
 max-height: calc(100vh - 240px);
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 gap: 25px;
 cursor: pointer;
 font-size: 16px;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  width: 100%;
  margin-left: 0;
 }
`;
