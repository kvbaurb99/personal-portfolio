"use client";
import Image from "next/image";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 1.5rem;
  gap: 2.5rem;
  position: relative;
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
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.625rem;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 0.75rem;
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  width: 100%;
  resize: none;
`;

export const StyledImage = styled(Image)`
  grid-column: span 2;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
