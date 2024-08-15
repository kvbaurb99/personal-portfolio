"use client";
import Image from "next/image";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 1.5rem;
  gap: 2.5rem;
  position: relative;
  @media (max-width: 768px) {
    
    grid-template-columns: 1fr;
  }
`;

export const StyledForm = styled.form`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 0.625rem;
  position: sticky;
  top: 8rem;
  left: 0;
  @media (max-width: 768px) {
    position: static;
    grid-column: span 1;
  }
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.625rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 0.75rem;
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  width: 100%;
  resize: none;
  border-radius: 0.25rem;
`;

export const StyledImage = styled(Image)`
  grid-column: span 2;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    grid-column: span 1;
    height: 360px;
  }
`;
