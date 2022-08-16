import styled from "styled-components";

export const LandingMenuContainer = styled.nav`
 display: flex;
 flex-direction: column;
 justify-content: center;
 background-color: ${({theme}) => theme.colors.primary.blue.shade};
 transform: ${({open}) => (open ? "translateX(0)" : "translateX(-100%)")};
 height: 100vh;
 text-align: left;
 position: absolute;
 top: 0;
 left: 0;
 transition: transform 0.3s ease-in-out;
 width: 100%;
 a {
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({theme}) => theme.colors.primary.white.main};
  text-decoration: none;
  transition: color 0.3s linear;
  &:hover {
   color: ${({theme}) => theme.colors.secondary.blue.main};
  }
 }
`;
