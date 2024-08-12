"use client";
import styled, { css } from "styled-components";

type SectionProps = {
  $type?: "about" | "skills";
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
  width: 65%;
  margin: 0 auto;
  margin-top: 3rem;
  ${(props) =>
    props.$type === "about" &&
    css`
      display: flex;

      gap: 2rem;
    `}
`;
