"use client";
import styled from "styled-components";

type SkillLineProps = {
  $isLink: boolean;
};

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 1.5rem;
`;

export const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 0.875rem;
  gap: 1rem;
`;

export const Skill = styled.a<SkillLineProps>`
  font-size: 0.875rem;
  position: relative;
  opacity: ${(props) => (props.$isLink ? 1 : 0.5)};
  margin: 0 0.125rem;
`;

export const SkillBottomLine = styled.div<SkillLineProps>`
  position: absolute;
  display: ${(props) => (props.$isLink ? "block" : "none")};
  bottom: -0.1375rem;
  left: 0;
  width: 100%;
  height: 1.5px;
  background-color: #999999;
  opacity: 0.5;
`;