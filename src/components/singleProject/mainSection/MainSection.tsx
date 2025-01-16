"use client";
import * as m from "@/paraglide/messages.js";
import { useState } from "react";

type Props = {
  description: string;
};

export default function MainSection({ description }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <p
        className={`mt-6 text-base xl:text-lg text-black/70 tracking-wide leading-relaxed ${
          !isExpanded ? "line-clamp-[8]" : ""
        } lg:line-clamp-none`}
      >
        {description}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="lg:hidden mt-4 text-black/60 text-sm italic underline"
      >
        {isExpanded ? m.czytaj_mniej() : m.czytaj_wiecej()}
      </button>
    </>
  );
}
