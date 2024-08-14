"use client";

import styled from "styled-components";

type PropsNavList = {
  $isDark?: boolean;
};

type PropsNav = {
  $isScrolled: boolean;
};

export const Nav = styled.nav<PropsNav>`
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;
  background-color: ${({ $isScrolled }) =>
    $isScrolled ? "rgba(240, 240, 240, 0.95)" : "transparent"};
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none"};
`;

export const NavContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const NavList = styled.ul<PropsNavList>`
  display: flex;
  align-items: center;
  color: ${({ $isDark }) =>
    $isDark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)"};
  gap: 2rem;
`;

export const NavItem = styled.li`
  font-family: var(--font-poppins);
`;
