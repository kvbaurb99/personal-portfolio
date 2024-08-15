import LogoDark from "@/assets/logo/J_dark.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t mt-20 bg-[#e9e9e9]">
      <div className="w-[90%] lg:w-[70%] mx-auto py-10 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
          <div className="flex flex-col items-start">
            <Image
              src={LogoDark}
              width={48}
              height={48}
              alt="logo"
              className="mb-4"
            />
            <div className="space-y-2">
              <p className="underline">Wszelkie prawa zastrzeżone ©</p>
              <p className="opacity-60">Jakub Urbański</p>
              <p className="text-sm italic">urbanski-dev.pl</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl mb-4">Artykuły</p>
            <ul className="space-y-2 list-disc list-inside">
              <li className="line-clamp-2">
                Next.js 14: Rewolucyjne Zmiany i Jak Wpłyną na Tworzenie Stron
                Internetowych
              </li>
              <li className="line-clamp-2">
                TypeScript vs JavaScript: Kiedy i Dlaczego Warto Przejść na
                TypeScript w Projektach Front-Endowych
              </li>
              <li className="line-clamp-2">
                10 Trików w JavaScript, Które Każdy Front-End Developer Powinien
                Znać w 2024 Roku
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-xl mb-4">Podstrony</p>
            <ul className="space-y-2 list-disc list-inside">
              <li className="line-clamp-2">Polityka prywatności</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-xl mb-4">Odnośniki</p>
            <ul className="space-y-2">
              <li>O mnie</li>
              <li>Oferta</li>
              <li>Portfolio</li>
              <li>Umiejętności</li>
              <li>Blog</li>
              <li>Kontakt</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
