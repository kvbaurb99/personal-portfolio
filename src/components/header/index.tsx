import Image from "next/image";
import { HeaderContainer } from "./styles/header";
import Background from "@/assets/header/background.webp";
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
        className="header-fade object-cover lg:object-fill"
      />
      <Content />
      <ArrowDown />
      <Backdrop />
    </HeaderContainer>
  );
}
