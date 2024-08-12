import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { keywords } from "@/data/keywords";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jakub Urbański - Portfolio",
  description: "Strona portfolio Jakuba Urbańskiego",
  keywords,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
