import { useMemo } from "react";
import * as m from "@/paraglide/messages.js";

export const useExperiences = () => {
  const experiences = useMemo(
    () => [
      {
        company: "WebLeaders",
        position: "Frontend Developer",
        period: `2022 - ${m.obecnie()}`,
        description: m.job_one(),
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Redux",
          "Tailwind CSS",
          "Styled Components",
          "Redis",
          "Python",
          "Testing Library",
        ],
      },
      {
        company: "Freelancer",
        position: "Frontend Developer",
        period: `2022 - ${m.obecnie()}`,
        description: m.job_two(),
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Redux",
          "Tailwind CSS",
          "Styled Components",
          "Redis",
          "Python",
          "Testing Library",
          "Emotion",
        ],
      },
      {
        company: "Komputronik",
        position: "IT Specialist",
        period: "2020 - 2021",
        description: m.job_three(),
        technologies: [
          "Windows",
          "Hardware Diagnostics",
          "Computer Repair",
          "Software Installation",
          "Hardware Components",
          "Network Configuration",
          "Virus Removal",
          "Microsoft Office",
          "Customer Service",
        ],
      },
    ],
    []
  );

  return { experiences };
};
