"use client";
import styled from "styled-components";

export const MobileMenuLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 120;
  width: 100%;
  background-color: white;
  height: auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); // dodany cień
`;

export const MobileMenuContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const MobileMenuList = styled.ul`
  width: 90%;
  margin: 0 auto;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 2rem 0 3rem 0;
`;

export const MobileMenuItem = styled.li`
  font-size: 1.125rem;
  font-weight: 300;
`;
