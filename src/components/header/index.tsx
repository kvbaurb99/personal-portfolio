"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";
import { HeaderContainer } from "./styles/header";
import Background from "@/assets/header/background.webp";
import { Backdrop } from "@/styles/main";
import Content from "./elements/Content";
import ArrowDown from "./elements/ArrowDown";

type Props = {
  isMobile: boolean;
};

const MotionImage = motion(Image);

const AnimatedBackgroundImage = styled(MotionImage)`
  will-change: transform;
`;

export default function Header({ isMobile }: Props) {
  return (
    <HeaderContainer>
      <AnimatedBackgroundImage
        src={Background}
        width={isMobile ? 780 : 1440}
        quality={100}
        height={560}
        priority
        alt="Header background"
        className="header-fade object-cover lg:object-fill absolute top-0 left-0 w-full h-full"
        initial={{ scale: isMobile ? 1.1 : 1.25 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 15,
          ease: "easeOut",
          repeat: Infinity,
        }}
      />
      <Content />
      <ArrowDown />
      <Backdrop
        initial={{ scale: 1.25 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 20,
          ease: "easeOut",
        }}
      />
    </HeaderContainer>
  );
}
