import type { Metadata } from "next";
import dynamic from "next/dynamic";
import StyledComponentsRegistry from "@/lib/registry";
import { keywords, openGraph } from "@/data/meta/meta";
import { Poppins, Lato, Kaushan_Script, Jost } from "next/font/google";
import "./globals.css";

const Footer = dynamic(() => import("@/components/footer"));

export const metadata: Metadata = {
  title: "Jakub Urbański | Front-end Developer | Bielsko-Biała",
  description:
    "Doświadczony Front-end Developer z Bielska-Białej, specjalizujący się w responsywnych stronach internetowych zoptymalizowanych pod SEO. Wykorzystuję AI do tworzenia innowacyjnych rozwiązań webowych.",
  keywords,
  robots: {
    index: false,
    follow: false,
  },
  openGraph,
  icons: {
    icon: [
      {
        url: "/favicon.png",
        href: "/favicon.png",
      },
    ],
  },
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

const jost = Jost({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <meta
          name="google-site-verification"
          content="QoNkPAx16C69E0jebhM9msZ6tMH9ejKnzdSo5CKLhXs"
        />
      </head>
      <body
        className={`${poppins.variable} ${latto.variable} ${kaushan.variable}`}
      >
        <main>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
        <Footer />
      </body>
    </html>
  );
}
