"use client";
import { Nav, NavContainer, NavList, NavItem } from "./styles/navigation";
import Logo from "@/assets/logo/J.png";
import LogoDark from "@/assets/logo/J_dark.png";
import HamburgerIcon from "@/assets/mobile/burger-menu.svg";
import HamburgerIconDark from "@/assets/mobile/burger-menu_dark.svg";
import items from "@/data/navigation/items.json";
import Image from "next/image";
import Link from "next/link";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { useState } from "react";
import MobileMenu from "./mobile";

type Props = {
  isDark?: boolean;
};

export default function Navigation({ isDark }: Props) {
  const [isMobileView, setIsMobileView] = useState(false);
  const { isScrolled } = useNavbarScroll(isDark);
  const MobileView = isMobileView ? (
    <MobileMenu isMobileView={isMobileView} setIsMobileView={setIsMobileView} />
  ) : null;

  return (
    <>
      <Nav $isScrolled={isDark ? true : isScrolled}>
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
          <Image
            src={isDark || isScrolled ? HamburgerIconDark : HamburgerIcon}
            width={26}
            onClick={() => setIsMobileView(true)}
            height={26}
            priority
            alt="hamburger"
            className="lg:hidden"
          />
        </NavContainer>
      </Nav>
      {MobileView}
    </>
  );
}
