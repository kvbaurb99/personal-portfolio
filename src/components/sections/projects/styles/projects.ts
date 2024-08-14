"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

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
  margin-top: 2rem;
`;

export const ProjectItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 300px; // Ustaw stałą wysokość dla całego elementu projektu
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ProjectImageContainer = styled.figure`
  overflow: hidden;
  width: 100%;
  height: 250px;
  position: relative;
  flex-grow: 1;
`;

export const ProjectImage = styled(Image)`
  transition: transform 0.3s ease;
  object-fit: cover;

  ${ProjectImageContainer}:hover & {
    transform: scale(1.1);
  }
`;

export const ProjectTitle = styled.h3`
  margin-top: 0.875rem;
  font-size: 1.05rem;
  line-height: 1.2;
  height: 2.4em;
  opacity: 0.6;
  font-family: var(--font-lato);
  font-weight: 500;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
