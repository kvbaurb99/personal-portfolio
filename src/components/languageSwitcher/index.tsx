import { usePathname } from "@/lib/i18n";
import { languageTag } from "@/paraglide/runtime";
import { useState, useEffect, useRef } from "react";
import {
  Button,
  ChevronIcon,
  Container,
  Dropdown,
  FlagContainer,
  LanguageLink,
  LanguageText,
} from "./style/languageSwitcher";

type Props = {
  isScrolled: boolean;
};

export default function LanguageSwitcher({ isScrolled }: Props) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = languageTag();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container ref={dropdownRef}>
      <Button $isScrolled={isScrolled} onClick={() => setIsOpen(!isOpen)}>
        <span className="flex items-center gap-2">
          <FlagContainer $isActive={currentLocale === "pl"}>🇵🇱</FlagContainer>
          <FlagContainer $isActive={currentLocale === "en"}>🇬🇧</FlagContainer>
        </span>
        <LanguageText>
          {currentLocale === "en" ? "English" : "Polski"}
        </LanguageText>
        <ChevronIcon
          $isOpen={isOpen}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </ChevronIcon>
      </Button>

      {isOpen && (
        <Dropdown $isScrolled={isScrolled}>
          <LanguageLink
            href={pathname}
            locale="pl"
            hrefLang="pl"
            $isScrolled={isScrolled}
            $isActive={currentLocale === "pl"}
            onClick={() => setIsOpen(false)}
          >
            <FlagContainer $isActive={true}>🇵🇱</FlagContainer>
            Polski
          </LanguageLink>
          <LanguageLink
            href={pathname}
            locale="en"
            hrefLang="en"
            $isScrolled={isScrolled}
            $isActive={currentLocale === "en"}
            onClick={() => setIsOpen(false)}
          >
            <FlagContainer $isActive={true}>🇬🇧</FlagContainer>
            English
          </LanguageLink>
        </Dropdown>
      )}
    </Container>
  );
}
