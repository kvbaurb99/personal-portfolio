"use client";
import Image from "next/image";
import styled from "styled-components";

type TitleProps = {
  $smallerMargin?: boolean;
};

export const AboutImage = styled(Image)`
  min-width: 370px;
  height: 520px;
  object-fit: cover;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    min-width: 100%;
    height: 360px;
  }
`;

export const AboutTitle = styled.h1<TitleProps>`
  font-size: 2rem;
  margin-top: ${(props) => (props.$smallerMargin ? "1.25rem" : "2rem")};
  color: #292929;
  font-weight: 600;
  font-family: var(--font-kaushan);
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 1.25rem;
  }
`;

export const AboutTitleReverse = styled.h2`
  font-size: 2rem;
  margin-top: 2rem;
  color: #292929;
  font-weight: 600;
  font-family: var(--font-kaushan);
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 1.25rem;
  }
`;

export const AboutOverview = styled.p`
  margin-top: 1.25rem;
  font-size: 1.05rem;
  line-height: 29px;
  letter-spacing: 0.375px;
  opacity: 0.65;
  font-family: var(--font-poppins);
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 26px;
  }
`;

export const AboutButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  border: 1.5px solid #999999;
  border-radius: 5px;
`;
