import type { Metadata } from "next";
import dynamic from "next/dynamic";
import StyledComponentsRegistry from "@/lib/registry";
import { keywords, openGraph } from "@/data/meta/meta";
import { poppins, latto, kaushan } from "@/components/fonts/fonts";
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
        <main style={{ overflow: "hidden" }}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
        <Footer />
      </body>
    </html>
  );
}
