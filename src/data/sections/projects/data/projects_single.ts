import * as m from "@/paraglide/messages.js";
import TestImage from "@/assets/sections/projects/takelink.png";
import TestTwo from "@/assets/sections/projects/takelink_2.png";
import TestThree from "@/assets/sections/projects/takelink_3.png";

import BlogOne from "@/assets/sections/projects/blog_1.png";
import BlogTwo from "@/assets/sections/projects/blog_2.png";
import BlogThree from "@/assets/sections/projects/blog_3.png";
import BlogFour from "@/assets/sections/projects/blog_4.png";
import BlogFive from "@/assets/sections/projects/blog_5.png";

import VODOne from "@/assets/sections/projects/vod_1.png";
import VODTwo from "@/assets/sections/projects/vod_2.png";
import VODThree from "@/assets/sections/projects/vod_3.png";
import VODFour from "@/assets/sections/projects/vod_4.png";

import MagroOne from "@/assets/sections/projects/magro_1.png";
import MagroTwo from "@/assets/sections/projects/magro_2.png";
import MagroThree from "@/assets/sections/projects/magro_3.png";
import MagroFour from "@/assets/sections/projects/magro_4.png";
import { desc } from "framer-motion/client";
import { description } from "@/data/meta/meta";

export const singleProjects = [
  {
    slug: "blogcms",
    title: "Blog Content Management System",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Styled Components",
      "Axios",
      "Redis",
      "next-intl",
    ],
    description_en:
      "BlogCMS - CMS system for managing blog content. The frontend layer contains the appearance of the blog which is built with four appearance versions that are modified in the blog management panel. The blog has a home page and sub-pages for categories, tags and authors from which the user can navigate to the article of his choice. The user can also rate or comment on the article, but this must first go through a verification process, there is also an article search engine which can be accessed through the navigation menu.",
    description:
      "BlogCMS - System CMS do zarządzania treścią bloga. Warstwa frontendu zawiera wygląd bloga który jest zbudowany z czterech wersji wyglądowych które są modyfikowane w panelu zarządzania blogiem. Blog posiada stronę główną oraz podstrony kategorii, tagów i autorów z których użytkownik może przejść na wybrany przez siebie artykuł. Użytkownik może także ocenić bądź skomentować artykuł jednak musi to uprzednio przejść przez proces weryfikacji, do dyspozycji jest także wyszukiwarka artykułów do której można przejść przez menu nawigacji.",
    overview: "BlogCMS - System CMS do zarządzania treścią bloga.",
    images: [BlogOne, BlogFour, BlogTwo, BlogFive, BlogThree],
  },
  {
    slug: "vodcms",
    title: "Video on Demand Content Management System",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Styled Components",
      "Axios",
      "Redis",
      "next-intl",
    ],
    description_en:
      "VODCMS - Search engine for movies and series created in CMS currently counting several hundred active domains in different color variants. The front-end layer allows you to search and browse hundreds of films, series and also actors who took part in particular productions. The user can browse detailed information on given movies and TV series, such as production description, cast, trailer or, for TV series, view current seasons and episodes belonging to them. Each domain is built in a different language making the sites reach users from all over the world. When a user can't make up his mind what movie or TV series to watch, he has at his disposal the subpage “What to watch?”, where he can choose a movie or TV series according to the chosen genre. Some domains also have their own blog.",
    description:
      "VODCMS - Wyszukiwarka filmów i seriali stworzona w systemie CMS obecnie licząca kilkaset aktywnych domen w różnych wariantach kolorystycznych. Warstwa frontendowa umożliwia wyszukiwanie oraz przeglądanie setek filmów, seriali a także aktorów który brali udział w poszczególnych produkcjach. Użytkownik może przeglądać dokładne informacje o danych filmach i serialach takie jak opis produkcji, obsada, zwiastun czy dla seriali przeglądać obecne sezony i należące do nich odcinki. Każda domena jest zbudowana w innym języku przez co strony trafiają do użytkowników z całego świata. Gdy użytkownik nie może się zdecydować jaki film bądź serial przeglądać ma do dyspozycji podstronę 'Co obejrzeć?' na której może zgodnie z wybranym gatunkiem wylosować film lub serial. Niektóre domeny posiadają także swojego bloga.",
    overview:
      "VODCMS - Wyszukiwarka filmów i seriali stworzona w systemie CMS obecnie licząca kilkaset aktywnych domen w różnych wariantach kolorystycznych.",
    images: [VODOne, VODFour, VODTwo, VODThree],
  },
  {
    slug: "takelink",
    title: "Takelink Publication Market",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Radix UI",
      "CKEditor",
      "NextAuth",
      "Paraglide-Next",
    ],
    description_en:
      "Takelink - is a platform where users can buy publications about their service or website. The publications are published on a specially designed blog that deals with the field that the buyer needs. The site has its own authorization system, users can create an account using their email address and password, or immediately log in through their Google account. After creating an account and logging in, the user adds a given publication to the shopping cart, then goes to a subpage where he places an order, fills in his data and proceeds to payment (via Stripe, Hotpay or traditional transfer). Once the payment is complete, the publication in question is in the order panel, where it can track the status of the order. Depending on which type of publication the buyer has chosen, he can write the article himself or have it written by a contractor. The site also has its own blog.",
    description:
      "Takelink - jest to platforma, na której użytkownicy mogą wykupić publikacje dotyczące swojej usługi bądź strony internetowej. Publikacje są publikowane na specjalnie do tego przygotowanym blogu, który dotyczy dziedziny, której kupujący potrzebuje. Strona posiada swój system autoryzacji, użytkownik może utworzyć konto posługując się swoim adresem e-mail i hasłem lub od razu zalogować się przez swoje konto Google. Po utworzeniu konta i zalogowaniu użytkownik dodaje daną publikację do koszyka, po czym przechodzi do podstrony, gdzie składa zamówienie, wypełnia swoje dane i przechodzi do płatności (przez Stripe, Hotpay lub przelew tradycyjny). Po zakończeniu płatności dana publikacja znajduje się w panelu zamówień, gdzie może śledzić status zamówienia. W zależności od tego, jaki typ publikacji kupujący wybrał, może on napisać artykuł samemu lub zlecić napisanie go firmie wykonującej. Strona posiada również swojego bloga.",
    overview:
      "Takelink - jest to platforma, na której użytkownicy mogą wykupić publikacje dotyczące swojej usługi bądź strony internetowej.",
    images: [TestImage, TestTwo, TestThree],
  },
  {
    slug: "magro",
    title: "Magro MK Grolik",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "next-intl",
    ],
    description_en:
      "Magro MK Grolik - a business card site for a mushroom processing company. The site has sub-pages with information and an offer. The site also has its own blog with articles written by the owners of the company, the content of the site is available in several languages which can be changed in the navigation menu. Compared to the other projects, it was created still in Pages Router technology. The site has a contact form which, when filled out by the user, sends a message to the company's e-mail address.",
    description:
      "Magro MK Grolik - strona wizytówka dla firmy zajmującej się przetwórstwem pieczarek. Strona posiada podstrony z informacjami oraz ofertą. Strona posiada także swojego bloga z artykułami napisanymi przez właścicieli firmy, treść strony dostępna jest w kilku językach które można zmienić w menu nawigacji. W porównaniu do pozostałych projektów została ona stworzona jeszcze w technologii Pages Router. Strona posiada formularz kontaktowy który po wypełnieniu przez użytkownika wysyła wiadomość na firmowy adres e-mail.",
    overview:
      "Magro MK Grolik - strona wizytówka dla firmy zajmującej się przetwórstwem pieczarek.",
    images: [MagroOne, MagroTwo, MagroFour, MagroThree],
  },
];
