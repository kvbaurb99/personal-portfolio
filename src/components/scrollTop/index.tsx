"use client";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { ChevronUp } from "lucide-react";

const scaleIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const ScrollTopButton = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  background-color: black;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  color: black;
  padding: 0.5rem;
  border-radius: 100%;
  cursor: pointer;
  animation: ${scaleIn} 0.3s ease-out;
  transition: transform 0.3s ease-out;
  &:hover {
    transform: scale(0.9);
  }
`;

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollTopButton $isVisible={isVisible} onClick={scrollToTop}>
      <ChevronUp color="#fff" width={22} height={22} />
    </ScrollTopButton>
  );
}
