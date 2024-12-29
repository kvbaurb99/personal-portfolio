import dynamic from "next/dynamic";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/sections/projects";
import ExperienceTimeline from "@/components/sections/experience";

// dynamic imports
const AboutMe = dynamic(() => import("@/components/sections/about"));
const SkillsSection = dynamic(() => import("@/components/sections/skills"));

export default async function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <AboutMe />
      <AboutMe reverse />
      <ExperienceTimeline />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}
