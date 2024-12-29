"use client";
import styled, { css } from "styled-components";

type SectionProps = {
  $type?: "about" | "skills" | "post";
  $reverse?: boolean;
};

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Section = styled.section<SectionProps>`
  color: #000;
  width: 70%;
  margin: 0 auto;
  padding-top: 3rem;
  flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};
  ${(props) =>
    props.$type === "about" &&
    css`
      display: flex;
      align-items: center;

      gap: 2rem;
    `}
  @media (max-width: 768px) {
    width: 90%;
    ${(props) =>
      props.$type === "about" &&
      css`
        display: flex;
        flex-direction: column;

        gap: 0.5rem;
      `}
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 80%;
  }
`;

export const H2 = styled.h2`
  font-size: 2rem;
  color: #292929;
  font-weight: 600;
  font-family: var(--font-kaushan);
  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;
