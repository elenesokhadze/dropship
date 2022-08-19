import styled from "styled-components";
import {NavLink} from "react-router-dom";

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

export const MenuLink = styled(NavLink)`
 width: 100%;
 padding: 8px 0 8px 16px;
 &.active {
  padding: 8px 0 8px 12px;
  background: ${({theme}) => theme.colors.secondary.blue.shade};
  border-left: 4px solid ${({theme}) => theme.colors.secondary.blue.main};
 }
 @media (max-width: ${({theme}) => `${theme.responsive.mobile}px`}) {
  padding: 8px 0 8px 24px;
  &.active {
   padding: 8px 0 8px 20px;
  }
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

export const MenuLogo = styled.img`
 height: 20px;
 width: 40px;
 margin-top: 20px;
`;

export const MenuIconContainer = styled.div`
 cursor: pointer;
 color: ${({theme}) => theme.colors.primary.blue.main};
 &:hover {
  color: ${({theme}) => theme.colors.secondary.blue.main};
 }
`;

export const MenuUserImage = styled.img`
 border: 2px solid ${({theme}) => theme.colors.secondary.blue.main};
 padding: 2px;
 border-radius: 50%;
 height: 32px;
 width: 32px;
 margin-left: -4px;
`;
