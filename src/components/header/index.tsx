"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";
import { HeaderContainer } from "./styles/header";
import Background from "@/assets/header/background.webp";
import { Backdrop } from "@/styles/main";
import Content from "./elements/Content";
import ArrowDown from "./elements/ArrowDown";

const MotionImage = motion(Image);

const AnimatedBackgroundImage = styled(MotionImage)`
  will-change: transform;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <AnimatedBackgroundImage
        src={Background}
        fill
        priority
        alt="Header background"
        className="header-fade object-cover lg:object-fill"
        initial={{ scale: 1.25 }}
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
