import { Nav, NavContainer, NavItem, NavList } from "./styles/navigation";
import Logo from "@/assets/logo/J.png";
import items from "@/data/navigation/items.json";
import Image from "next/image";

export default function Navigation() {
  return (
    <Nav>
      <NavContainer>
        <Image src={Logo} width={40} height={40} priority alt="logo" />
        <NavList>
          {items.map((item, index) => (
            <NavItem key={index}>
              <a href="#about">{item.title}</a>
            </NavItem>
          ))}
        </NavList>
      </NavContainer>
    </Nav>
  );
}
