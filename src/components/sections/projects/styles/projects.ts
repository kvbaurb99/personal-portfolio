"use client";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "@/lib/i18n";

type CategoryProps = {
  $isActive: boolean;
};

export const CategoriesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.75rem;
  gap: 1.75rem;
`;

export const CategoryButton = styled.button<CategoryProps>`
  color: ${(props) => (props.$isActive ? "rgb(90, 194, 78)" : "#999999")};
  opacity: ${(props) => (props.$isActive ? 1 : 0.8)};
  font-weight: ${(props) => (props.$isActive ? "bold" : "normal")};
  transition: all 0.3s;
`;

export const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  row-gap: 4rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%; // Dostosowanie wysokości do zawartości
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ProjectImageContainer = styled(Link)`
  overflow: hidden;
  width: 100%;
  height: 250px;
  position: relative;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.2); // Dodajemy stylowy cień
  transition: box-shadow 0.3s ease; // Dodajemy płynne przejście dla cienia

  &:hover {
    box-shadow: 0 15px 40px -5px rgba(0, 0, 0, 0.3); // Wzmacniamy cień przy hover
  }
`;

export const ProjectImage = styled(Image)`
  transition: transform 0.3s ease;
  object-fit: cover;

  ${ProjectImageContainer}:hover & {
    transform: scale(1.05); // Zmniejszamy skalę, aby efekt był subtelniejszy
  }
`;

export const ProjectTitle = styled.h3`
  margin-top: 1rem;
  font-size: 1.1rem;
  opacity: 0.6;
  font-weight: 500;
  line-height: 1.2;
  overflow: hidden;
  display: -webkit-box;
  font-family: var(--font-lato);
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ProjectDetailsList = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  margin-top: 0.6rem;
  font-size: 0.875rem;
  flex-grow: 1; // Pozwala liście rosnąć i wypełnić dostępną przestrzeń
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProjectDetailItem = styled.li`
  padding: 0.15rem 0;
  font-family: var(--font-lato);
`;

export const ViewDetailsButton = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: transparent;
  border: 1px solid #e5e7eb;
  color: #374151;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s ease;
  margin-top: 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #f3f4f6, #e5e7eb);
    transition: all 0.4s ease;
    z-index: 1;
  }

  &:hover {
    color: #374151;
    border-color: transparent;

    &::before {
      left: 0;
    }

    svg {
      transform: translateX(4px);
    }
  }

  span,
  svg {
    position: relative;
    z-index: 2;
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    text-decoration: none;
  }
`;
