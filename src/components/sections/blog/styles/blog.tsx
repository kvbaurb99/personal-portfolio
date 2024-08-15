"use client";
import Image from "next/image";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const ArticleContainer = styled.div`
  width: 100%;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 250px;
  object-fit: cover;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease; // Dodajemy płynne przejście dla cienia
  &:hover {
    box-shadow: 0 15px 40px -5px rgba(0, 0, 0, 0.3); // Wzmacniamy cień przy hover
  }
`;

export const ArticleTitle = styled.h3`
  font-weight: 600;
  margin-top: 0.75rem;
  font-family: "Lato", sans-serif;
  opacity: 0.8;
`;

export const ArticleOverview = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0.6;
  margin-top: 0.375rem;
  font-size: 0.875rem;
`;

export const ReadButton = styled.button`
  font-size: 0.875rem;
  opacity: 0.6;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 0.375rem 1rem;
  margin-top: 0.625rem;
  border-radius: 0.25rem;
`;
