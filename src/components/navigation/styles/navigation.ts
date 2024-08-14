"use client";
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
`;

export const NavContainer = styled.nav`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  gap: 2rem;
`;
export const NavItem = styled.li``;
