import dynamic from "next/dynamic";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/sections/projects";
import ExperienceTimeline from "@/components/sections/experience";
import { getHeadersData } from "@/utils/headersData";
import ContactSection from "@/components/sections/contact";

// dynamic imports
const AboutMe = dynamic(() => import("@/components/sections/about"));
const SkillsSection = dynamic(() => import("@/components/sections/skills"));

export default async function Home() {
  const { isMobile } = await getHeadersData();
  return (
    <>
      <Navigation />
      <Header isMobile={isMobile} />
      <AboutMe isMobile={isMobile} />
      <AboutMe isMobile={isMobile} reverse />
      <ExperienceTimeline />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
