import {
  MobileMenuContainer,
  MobileMenuItem,
  MobileMenuLayout,
  MobileMenuList,
} from "./styles/mobileMenuStyles";
import Image from "next/image";
import LogoDark from "@/assets/logo/J_dark.png";
import CloseIcon from "@/assets/mobile/close_icon.svg";

type Item = {
  title: string;
  id: string;
};

type Props = {
  items: Item[];
  isMobileView: boolean;
  setIsMobileView: (value: boolean) => void;
};

export default function MobileMenu({
  isMobileView,
  setIsMobileView,
  items,
}: Props) {
  const handleCloseMenu = () => setIsMobileView(false);
  if (!isMobileView) return null;
  return (
    <MobileMenuLayout>
      <MobileMenuContainer>
        <Image src={LogoDark} width={40} height={40} priority alt="logo" />
        <Image
          onClick={() => setIsMobileView(false)}
          src={CloseIcon}
          width={35}
          height={35}
          priority
          alt="logo"
        />
      </MobileMenuContainer>
      <MobileMenuList>
        {items.map((item, index) => (
          <MobileMenuItem key={index}>
            <a onClick={handleCloseMenu} href={item.id}>
              {item.title}
            </a>
          </MobileMenuItem>
        ))}
      </MobileMenuList>
    </MobileMenuLayout>
  );
}
