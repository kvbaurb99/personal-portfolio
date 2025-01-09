import * as m from "@/paraglide/messages.js";
import { useMemo } from "react";

export const useSkills = () => {
  const skills = useMemo(
    () => [
      {
        name: m.jezyki_programowania(),
        items: [
          {
            name: "HTML",
            link: "",
          },
          {
            name: "CSS",
            link: "",
          },
          {
            name: "JavaScript",
            link: "",
          },
          {
            name: "TypeScript",
            link: "https://www.typescriptlang.org/",
          },
          {
            name: "Python",
            link: "https://www.python.org/",
          },
          {
            name: "C#",
            link: "",
          },
          {
            name: "Markdown",
            link: "",
          },
        ],
      },
      {
        name: m.frameworki(),
        items: [
          {
            name: "React",
            link: "https://react.dev/",
          },
          {
            name: "Next.js",
            link: "https://nextjs.org/",
          },
        ],
      },
      {
        name: m.stylowanie(),
        items: [
          {
            name: "Tailwind CSS",
            link: "https://tailwindcss.com/",
          },
          {
            name: "Emotion",
            link: "https://emotion.sh/docs/introduction",
          },
          {
            name: "styled-components",
            link: "https://styled-components.com/",
          },
        ],
      },
      {
        name: m.biblioteki_ui(),
        items: [
          {
            name: "Material UI",
            link: "https://mui.com/material-ui/",
          },
          {
            name: "Radix UI",
            link: "https://www.radix-ui.com/",
          },
          {
            name: "Chakra UI",
            link: "https://v2.chakra-ui.com/",
          },
        ],
      },
      {
        name: m.zarzadzanie_stanem_aplikacji(),
        items: [
          {
            name: "Redux (Redux Toolkit)",
            link: "https://redux.js.org/",
          },
          {
            name: "React Hook Form",
            link: "https://react-hook-form.com/",
          },
          {
            name: "TanStack Query",
            link: "https://tanstack.com/query/latest",
          },
        ],
      },
      {
        name: m.bazy_danych(),
        items: [
          {
            name: "MySQL",
            link: "https://react-hook-form.com/",
          },
          {
            name: "MongoDB",
            link: "https://react-hook-form.com/",
          },
          {
            name: "Redis",
            link: "https://redux.js.org/",
          },
        ],
      },
      {
        name: m.biblioteki(),
        items: [
          {
            name: "Lodash",
            link: "https://lodash.com/",
          },
          {
            name: "I18next",
            link: "https://www.i18next.com/",
          },
          {
            name: "next-auth",
            link: "https://next-auth.js.org/",
          },
          {
            name: "neshca/cache-handler",
            link: "",
          },
          {
            name: "zod",
            link: "https://zod.dev/",
          },
          {
            name: "Framer Motion",
            link: "https://motion.dev/",
          },
          {
            name: "next-intl",
            link: "https://next-intl-docs.vercel.app/",
          },
          {
            name: "ESLint",
            link: "https://eslint.org/",
          },
        ],
      },
      {
        name: m.kontrola_wersji(),
        items: [
          {
            name: "Git",
            link: "https://git-scm.com/",
          },
          {
            name: "GitHub",
            link: "https://github.com/",
          },
        ],
      },
      {
        name: m.testowanie(),
        items: [
          {
            name: "React Testing Library",
            link: "https://testing-library.com/docs/react-testing-library/intro/",
          },
          {
            name: "Jest",
            link: "https://jestjs.io/",
          },
          {
            name: "Cypress",
            link: "https://docs.cypress.io/app/get-started/why-cypress",
          },
        ],
      },
      {
        name: m.narzedzia_ai(),
        items: [
          {
            name: "ChatGPT",
            link: "",
          },
          {
            name: "Dall-E 2/3",
            link: "",
          },
          {
            name: "Speechify",
            link: "",
          },
          {
            name: "Claude.ai",
            link: "",
          },
          {
            name: "Gemini",
            link: "",
          },
          {
            name: "Grok",
            link: "",
          },
        ],
      },
      {
        name: m.narzedzia_developerskie(),
        items: [
          {
            name: "Visual Studio Code",
            link: "",
          },
          {
            name: "PyCharm",
            link: "",
          },
          {
            name: "Figma",
            link: "",
          },
          {
            name: "Postman",
            link: "",
          },
          {
            name: "Testfully",
            link: "",
          },
          {
            name: "Redis Insight",
            link: "",
          },
        ],
      },
    ],
    []
  );
  return { skills };
};
