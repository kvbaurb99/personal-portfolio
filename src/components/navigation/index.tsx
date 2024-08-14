"use client";
import React, { useState, useEffect } from "react";
import { Nav, NavContainer, NavList, NavItem } from "./styles/navigation";
import Logo from "@/assets/logo/J.png";
import LogoDark from "@/assets/logo/J_dark.png";
import items from "@/data/navigation/items.json";
import Image from "next/image";
import Link from "next/link";

type Props = {
  isDark?: boolean;
};

export default function Navigation({ isDark }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(isDark ? true : scrollPosition > window.innerHeight);
      console.log(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav $isScrolled={isScrolled}>
      <NavContainer>
        <Link href={"/"}>
          <Image
            src={isDark || isScrolled ? LogoDark : Logo}
            width={40}
            height={40}
            priority
            alt="logo"
          />
        </Link>
        <NavList $isDark={isDark || isScrolled}>
          {items.map((item, index) => (
            <NavItem key={index}>
              <a href={item.id}>{item.title}</a>
            </NavItem>
          ))}
        </NavList>
      </NavContainer>
    </Nav>
  );
}
