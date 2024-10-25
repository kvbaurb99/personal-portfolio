import React from "react";
import {
  MobileMenuContainer,
  MobileMenuLayout,
} from "./styles/mobileMenuStyles";
import Image from "next/image";
import LogoDark from "@/assets/logo/J_dark.png";
import CloseIcon from "@/assets/mobile/close_icon.svg";

type Props = {
  isMobileView: boolean;
  setIsMobileView: (value: boolean) => void;
};

export default function MobileMenu({ isMobileView, setIsMobileView }: Props) {
  if (!isMobileView) return null;
  return (
    <MobileMenuLayout>
      <MobileMenuContainer>
        <Image src={LogoDark} width={40} height={40} priority alt="logo" />
        <Image
          onClick={() => setIsMobileView(false)}
          src={CloseIcon}
          width={25}
          height={25}
          priority
          alt="logo"
        />
      </MobileMenuContainer>
    </MobileMenuLayout>
  );
}
