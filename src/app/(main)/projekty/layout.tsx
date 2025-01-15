import type { PropsWithChildren } from "react";
import Navigation from "@/components/navigation";
import Header from "@/components/header";
import { getLocalisedPathname } from "@/utils/getPathname";

export async function generateMetadata() {
  const pathname = getLocalisedPathname("/projekty");
  return {
    title: "Wszystkie projekty",
    description: "Opis",
    alternates: {
      canonical: pathname,
    },
  };
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <Navigation isDark />
      {children}
    </>
  );
}
