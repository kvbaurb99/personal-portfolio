"use client";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    height: 625px;
  }
`;

export const HeaderTitle = styled.p`
  color: white;
  font-size: 66px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

export const SocialsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

export const SocialsItem = styled.li``;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-30px) translateX(-50%);
  }
  60% {
    transform: translateY(-15px) translateX(-50%);
  }
`;

export const ArrowDownElement = styled(Image)`
  position: absolute;
  z-index: 10;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: ${bounce} 3s infinite;
  @media (max-width: 768px) {
    width: 40px;
  }
`;
