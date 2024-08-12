import Image from "next/image";
import { HeaderContainer } from "./styles/header";
import Background from "@/assets/header/background.jpg";
import { Backdrop } from "@/styles/main";
import Content from "./elements/Content";
import ArrowDown from "./elements/ArrowDown";

export default function Header() {
  return (
    <HeaderContainer>
      <Image
        src={Background}
        fill
        priority
        alt="Header background"
        className="header-fade"
      />
      <Content />
      <ArrowDown />
      <Backdrop />
    </HeaderContainer>
  );
}
