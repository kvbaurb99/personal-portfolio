import BlogImage from "@/assets/sections/projects/blog.avif";
import MagroImage from "@/assets/sections/projects/magro.webp";
import VODImage from "@/assets/sections/projects/vod.jpg";
import TakelinkImage from "@/assets/sections/projects/takelink.jpg";

export const projects = [
  {
    title: "Blog Content Management System",
    slug: "landing-page",
    category: "cms",
    image: BlogImage,
    details: [
      {
        title: "Integracja z backendem",
      },
      {
        title: "Implementacja AI",
      },
      {
        title: "Google Ads na wybranych domenach",
      },
      {
        title: "Wielojęzyczność",
      },
    ],
    links: [
      {
        title: "EdukacjaKrytyczna",
        url: "https://edukacjakrytyczna.pl/",
      },
      {
        title: "Ekogroszek Podhale",
        url: "https://ekogroszek-podhale.pl/",
      },
    ],
  },
  {
    title: "Video on Demand Content Management System",
    slug: "landing-page",
    category: "cms",
    image: VODImage,
    details: [
      {
        title: "Integracja z backendem",
      },
      {
        title: "Stworzenie własnej wyszukiwarki filmów i seriali",
      },
      {
        title: "Google Ads na wybranych domenach",
      },
      {
        title: "Wielojęzyczność",
      },
    ],
    links: [
      {
        title: "Zalukaj",
        url: "https://zalukaj.io/",
      },
      {
        title: "MEGAKino.co",
        url: "https://megakino-co.com/",
      },
    ],
  },
  {
    title: "Magro MK Grolik Spółka Jawna",
    slug: "landing-page",
    category: "landing-page",
    image: MagroImage,
    details: [
      {
        title: "Dedykowana firmowa strona",
      },
      {
        title: "Dedykowany blog",
      },
      {
        title: "Czołowe pozycje w Google",
      },
      {
        title: "Wielojęzyczność",
      },
    ],
    links: [
      {
        title: "Magro MK Grolik",
        url: "https://magro.info.pl/",
      },
    ],
  },
  {
    title: "Takelink Publication Market",
    slug: "landing-page",
    category: "cms",
    image: TakelinkImage,
    details: [
      {
        title: "Autoryzacja użytkowników",
      },
      {
        title: "Kupno artykułów i publikacji sponsorowanych",
      },
      {
        title: "Implementacja systemu płatności",
      },
    ],
    links: [
      {
        title: "Takelink",
        url: "https://takelink.pl/",
      },
    ],
  },
];
