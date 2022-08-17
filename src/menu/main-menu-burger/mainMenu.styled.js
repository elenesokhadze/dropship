import styled from "styled-components";

export const MenuContainer = styled.div`
 position: fixed;
 width: 56px;
 border-right: 2px solid ${({theme}) => theme.colors.primary.grey.main};
 height: 100%;
 @media (max-width: ${({theme}) => `${theme.responsive.tablet}px`}) {
  padding-top: 40px;
  width: 80px;
 }
`;

export const MenuNav = styled.ul`
 background: ${({theme}) => theme.colors.primary.grey.tint};
 height: 100%;
 display: flex;
 flex-direction: column;
 gap: 32px;
 padding-left: 0;
 align-items: center;
 list-style: none;
 margin: 0;
 padding-top: 10px;
 @media (max-width: ${({theme}) => `${theme.responsive.mobile}px`}) {
  transform: ${({open}) => (open ? "translateX(0)" : "translateX(100%)")};
 }
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
 width: 40px;
 border-bottom: 2px solid ${({theme}) => theme.colors.primary.grey.main};
 padding: 20px 5px;
`;

export const MenuUserImage = styled.img`
 border-radius: 50%;
 height: 24px;
 width: 24px;
`;
