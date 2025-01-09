"use client";
import { Link } from "@/lib/i18n";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button<{ $isScrolled: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 300ms;
  border-radius: 9999px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(229, 231, 235, 0.2);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: ${(props) =>
    props.$isScrolled ? "rgba(31, 41, 55, 0.9)" : "rgba(255, 255, 255, 0.7)"};
  color: ${(props) => (props.$isScrolled ? "white" : "rgb(55, 65, 81)")};

  &:hover {
    background-color: ${(props) =>
      props.$isScrolled ? "rgba(55, 65, 81, 0.9)" : "rgba(255, 255, 255, 0.9)"};
  }
`;

export const FlagContainer = styled.span<{ $isActive: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
`;

export const LanguageText = styled.span`
  @media (max-width: 640px) {
    display: none;
  }
`;

export const ChevronIcon = styled.svg<{ $isOpen: boolean }>`
  width: 1rem;
  height: 1rem;
  transition: transform 200ms;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

export const Dropdown = styled.div<{ $isScrolled: boolean }>`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 12rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 0.25rem 0;
  border: 1px solid
    ${(props) => (props.$isScrolled ? "rgb(55, 65, 81)" : "rgb(229, 231, 235)")};
  backdrop-filter: blur(8px);
  transform-origin: top right;
  transition: all 200ms;
  background-color: ${(props) =>
    props.$isScrolled ? "rgb(31, 41, 55)" : "white"};
`;

export const LanguageLink = styled(Link)<{
  $isScrolled: boolean;
  $isActive: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  transition: colors 150ms;
  color: ${(props) => {
    if (props.$isActive) return "rgb(90, 194, 78)";
    return props.$isScrolled ? "white" : "black";
  }};

  &:hover {
    background-color: rgba(229, 231, 235, 0.5);
  }
`;
