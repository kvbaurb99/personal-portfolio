import * as m from "@/paraglide/messages.js";
import BlogImage from "@/assets/sections/projects/blog.avif";
import MagroImage from "@/assets/sections/projects/magro.webp";
import VODImage from "@/assets/sections/projects/vod.jpg";
import TakelinkImage from "@/assets/sections/projects/takelink.jpg";

export const useProjects = () => {
  const projects = [
    {
      title: "Blog Content Management System",
      slug: "landing-page",
      slug_page: "blogcms",
      category: "cms",
      image: BlogImage,
      details: [
        {
          title: m.integracja_z_backendem(),
        },
        {
          title: m.implementacja_ai(),
        },
        {
          title: m.google_ads_na_wybranych_domenach(),
        },
        {
          title: m.wielojezycznosc(),
        },
      ],
    },
    {
      title: "Video on Demand Content Management System",
      slug: "landing-page",
      slug_page: "vodcms",
      category: "cms",
      image: VODImage,
      details: [
        {
          title: m.integracja_z_backendem(),
        },
        {
          title: m.wyszukiwarka_filmow_i_seriali(),
        },
        {
          title: m.google_ads_na_wybranych_domenach(),
        },
        {
          title: m.wielojezycznosc(),
        },
      ],
    },
    {
      title: "Magro MK Grolik Spółka Jawna",
      slug_page: "magro",
      slug: "landing-page",
      category: "landing-page",
      image: MagroImage,
      details: [
        {
          title: m.firmowa_strona_internetowa(),
        },
        {
          title: m.dedykowany_blog(),
        },
        {
          title: m.czolowe_pozycje_w_google(),
        },
        {
          title: m.wielojezycznosc(),
        },
      ],
    },
    {
      title: "Takelink Publication Market",
      slug_page: "takelink",
      slug: "landing-page",
      category: "cms",
      image: TakelinkImage,
      details: [
        {
          title: m.autoryzacja_uzytkownikow(),
        },
        {
          title: m.kupno_artykulow_i_publikacji(),
        },
        {
          title: m.system_platnosci(),
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
  return { projects };
};
