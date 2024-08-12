import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { keywords, openGraph } from "@/data/meta/meta";
import { Poppins, Lato, Kaushan_Script } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bielsko-Biała | Frontend Developer - Jakub Urbański",
  description: "Jakub Urbański - Frontend Developer Portfolio",
  keywords,
  robots: {
    index: true,
    follow: true,
  },
  openGraph,
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const latto = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kaushan",
});

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
        <main>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
