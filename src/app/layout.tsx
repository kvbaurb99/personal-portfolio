import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { keywords, openGraph } from "@/data/meta/meta";
import { Poppins, Lato, Kaushan_Script, Jost } from "next/font/google";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Jakub Urbański | Unity Developer | Bielsko-Biała",
  description:
    "Doświadczony Front-end Developer z Bielska-Białej, specjalizujący się w responsywnych stronach internetowych zoptymalizowanych pod SEO. Wykorzystuję AI do tworzenia innowacyjnych rozwiązań webowych.",
  keywords,
  robots: {
    index: false,
    follow: false,
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
      <body
        className={`${poppins.variable} ${latto.variable} ${kaushan.variable}`}
      >
        <Head>
          <meta
            name="google-site-verification"
            content="QoNkPAx16C69E0jebhM9msZ6tMH9ejKnzdSo5CKLhXs"
          />
        </Head>
        <main>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
