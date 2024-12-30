"use client";
import styled from "styled-components";

export const TimelineContainer = styled.div`
  position: relative;
  margin-top: 2.5rem;
`;

export const VerticalLine = styled.div`
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 0.125rem;
  background-color: #e5e7eb;
`;

export const ExperienceItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  margin-left: 2rem;
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: -1rem;
  transform: translateX(-50%);
  width: 2rem;
  height: 2rem;
  background-color: #374151;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-left: 2.5rem;
  @media (max-width: 768px) {
    margin-left: 1.25rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const CompanyName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const Period = styled.div`
  display: flex;
  align-items: center;
  color: #4b5563;
  font-size: 0.875rem;
`;

export const Position = styled.div`
  display: flex;
  align-items: center;
  color: #374151;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
`;

export const Description = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  gap: 0.5rem;
`;

export const TechTag = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: #f3f4f6;
  color: #374151;
  border-radius: 9999px;
  font-size: 0.875rem;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 0.5rem;
`;
