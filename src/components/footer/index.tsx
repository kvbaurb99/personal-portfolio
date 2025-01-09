import LogoDark from "@/assets/logo/J_dark.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t mt-20 bg-[#e9e9e9]">
      <div className="w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto py-10">
        <div className="flex flex-col items-start">
          <Image
            src={LogoDark}
            width={48}
            height={48}
            alt="logo"
            className="mb-4"
          />
          <div className="space-y-2 text-black">
            <p className="opacity-60">Jakub Urbański</p>
            <p className="text-sm italic">urbanski-frontend.pl</p>
            <p className="underline text-xs">Wszelkie prawa zastrzeżone ©</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
