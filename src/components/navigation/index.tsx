"use client";
import { Nav, NavContainer, NavList, NavItem } from "./styles/navigation";
import Logo from "@/assets/logo/J.png";
import LogoDark from "@/assets/logo/J_dark.png";
import HamburgerIcon from "@/assets/mobile/burger-menu.svg";
import HamburgerIconDark from "@/assets/mobile/burger-menu_dark.svg";
import { useNavigationItems } from "@/data/navigation/items";
import Image from "next/image";
import { Link } from "@/lib/i18n";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { useState } from "react";
import MobileMenu from "./mobile";
import LanguageSwitcher from "../languageSwitcher";

type Props = {
  isDark?: boolean;
};

export default function Navigation({ isDark }: Props) {
  const { items } = useNavigationItems();
  const [isMobileView, setIsMobileView] = useState(false);
  const { isScrolled } = useNavbarScroll(isDark);

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
          <div className="flex items-center gap-6">
            <LanguageSwitcher isScrolled={isScrolled} />
            <Image
              src={isDark || isScrolled ? HamburgerIconDark : HamburgerIcon}
              width={22}
              onClick={() => setIsMobileView(true)}
              height={22}
              priority
              alt="hamburger"
              className="lg:hidden"
            />
          </div>
        </NavContainer>
      </Nav>
      {isMobileView ? (
        <MobileMenu
          items={items}
          isMobileView={isMobileView}
          setIsMobileView={setIsMobileView}
        />
      ) : null}
    </>
  );
}
