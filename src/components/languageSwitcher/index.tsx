import { Link, usePathname } from "@/lib/i18n";
import { languageTag } from "@/paraglide/runtime";
import { useState } from "react";

type Props = {
  isScrolled: boolean;
};

export default function LanguageSwitcher({ isScrolled }: Props) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = languageTag();

  const buttonClasses = isScrolled
    ? "bg-gray-800/90 hover:bg-gray-700/90 text-white"
    : "bg-white/70 hover:bg-white/90 text-gray-700";

  const dropdownClasses = isScrolled
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-200";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full 
                 backdrop-blur-md border border-gray-200/20 shadow-sm ${buttonClasses}`}
      >
        <span className="flex items-center gap-2">
          <span
            className={`w-5 h-5 rounded-full overflow-hidden flex items-center justify-center
                         ${
                           currentLocale === "en" ? "opacity-100" : "opacity-50"
                         }`}
          >
            🇬🇧
          </span>
          <span
            className={`w-5 h-5 rounded-full overflow-hidden flex items-center justify-center
                         ${
                           currentLocale === "pl" ? "opacity-100" : "opacity-50"
                         }`}
          >
            🇵🇱
          </span>
        </span>
        <span className="hidden sm:inline">
          {currentLocale === "en" ? "English" : "Polski"}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 rounded-xl shadow-lg py-1 
                      border backdrop-blur-lg
                      transform transition-all duration-200 ${dropdownClasses}`}
        >
          <Link
            href={pathname}
            locale="en"
            hrefLang="en"
            className={`flex items-center ${
              isScrolled
                ? "text-white hover:bg-gray-200/50"
                : "text-black hover:bg-gray-200/50"
            } gap-3 px-4 py-2 text-sm transition-colors
                      ${currentLocale === "en" ? "text-blue-600" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
              🇬🇧
            </span>
            English
          </Link>
          <Link
            href={pathname}
            locale="pl"
            hrefLang="pl"
            className={`flex ${
              isScrolled
                ? "text-white hover:bg-gray-200/50"
                : "text-black hover:bg-gray-200/50"
            } items-center gap-3 px-4 py-2 text-sm  transition-colors
                      ${currentLocale === "pl" ? "text-blue-600" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
              🇵🇱
            </span>
            Polski
          </Link>
        </div>
      )}
    </div>
  );
}
