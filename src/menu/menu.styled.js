import styled from "styled-components";

export const MenuContainer = styled.div`
 position: fixed;
 width: 53px;
 border-right: 2px solid ${({theme}) => theme.colors.primary.grey.tint};
 height: 100%;
`;

export const MenuNav = styled.ul`
 background: ${({theme}) => theme.colors.primary.white.main};
 height: 100%;
 display: flex;
 flex-direction: column;
 gap: 31px;
 padding-left: 0;
 align-items: center;
 cursor: pointer;
 list-style: none;
 margin: 0;
 padding-top: 10px;
`;

export const MenuItemCircled = styled.li`
 border: 2px solid ${({theme}) => theme.colors.secondary.blue.main};
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 2px;
`;

export const MenuLogo = styled.img`
 height: 20px;
 width: 39px;
 border-bottom: 2px solid ${({theme}) => theme.colors.primary.grey.tint};
 padding: 20px 5px;
`;

export const MenuUserImage = styled.img`
 border-radius: 50%;
 height: 25px;
 width: 25px;
`;
