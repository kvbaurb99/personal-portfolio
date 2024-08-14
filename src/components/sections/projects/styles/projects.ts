"use client";
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

export const ProjectImageContainer = styled.figure`
  overflow: hidden;
  width: 100%;
  height: 250px;
`;

export const ProjectImage = styled(Image)`
  transition: transform 0.3s ease;
  width: 100%;
  height: 250px;
  object-fit: cover;

  ${ProjectImageContainer}:hover & {
    transform: scale(1.1);
  }
`;
