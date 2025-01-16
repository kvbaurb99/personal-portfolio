"use client";
import Image from "next/image";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  position: relative;
  margin-top: 6rem;
  
  @media (min-width: 1024px) {
    margin-top: 7rem;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 20px !important;
    left: 50% !important;
    transform: translateX(-50%);
    z-index: 10;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;

    @media (min-width: 768px) {
      width: 12px;
      height: 12px;
    }
  }

  .swiper-pagination-bullet-active {
    background: white;
  }
`;

export const Figure = styled.figure`
  position: relative;
`;

export const StyledImage = styled(Image)`
  height: 220px;
  object-fit: cover;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  border-radius: 0.25rem;

  @media (min-width: 1024px) {
    height: 480px;
  }

  @media (min-width: 1280px) {
    height: 560px;
  }

  @media (min-width: 1536px) {
    height: 620px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
`;