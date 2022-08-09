import styled from "styled-components";

export const PrimaryButtonContainer = styled.div`
 font-size: 12px;
 text-align: center;
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 color: ${({ theme }) => theme.colors.primary.white.main};
 background:  ${({ theme }) => theme.colors.primary.blue.main};
 min-width: 64px;
 height: 40px;
 width: 160px;
 text-transform: uppercase;
 font-weight: 500;
 line-height: 1.75;
 border-radius: 4px;
 text-decoration: none;
 border: none;
 box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
 transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
 &:hover{
    background: ${({ theme }) => theme.colors.primary.blue.tint};
 }
`;


export const SecondaryButtonContainer = styled.div``;
