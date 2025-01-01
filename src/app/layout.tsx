import type { Metadata } from "next";
import dynamic from "next/dynamic";
import StyledComponentsRegistry from "@/lib/registry";
import { keywords, openGraph, description, title } from "@/data/meta/meta";
import { poppins, latto, kaushan } from "@/components/fonts/fonts";
import "./globals.css";

const Footer = dynamic(() => import("@/components/footer"));

export const metadata: Metadata = {
  title,
  description,
  keywords,
  robots: {
    index: false,
    follow: false,
  },
  openGraph,
  alternates: {
    canonical: "https://urbanski-frontend.pl",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        href: "/favicon.png",
      },
    ],
  },
  publisher: "https://urbanski-frontend.pl",
  authors: [
    {
      name: "https://urbanski-frontend.pl",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`${poppins.variable} ${latto.variable} ${kaushan.variable}`}
      >
        <main style={{ overflow: "hidden" }}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
        <Footer />
      </body>
    </html>
  );
}
