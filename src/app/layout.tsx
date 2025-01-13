import { LanguageProvider } from "@inlang/paraglide-next";
import { languageTag } from "@/paraglide/runtime.js";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import StyledComponentsRegistry from "@/lib/registry";
import { keywords, openGraph, description, title } from "@/data/meta/meta";
import { poppins, latto, kaushan } from "@/components/fonts/fonts";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title,
  description,
  keywords,
  openGraph,
  robots: {
    index: true,
    follow: true,
  },
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
    <LanguageProvider>
      <html lang={languageTag()}>
        <head>
          <meta
            name="google-site-verification"
            content="QTQwzyDwFpIQJjpjWHuRyCnXNiR_kZbIaONEtFi3sfg"
          />
        </head>
        <body
          className={`${poppins.variable} ${latto.variable} ${kaushan.variable}`}
        >
          <main style={{ overflow: "hidden" }}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </main>
          <Footer />
        </body>
      </html>
    </LanguageProvider>
  );
}
