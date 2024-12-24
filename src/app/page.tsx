import dynamic from "next/dynamic";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/sections/projects";
import { getHeadersData } from "@/utils/headersData";
import { Fragment } from "react";

// dynamic imports
const AboutMe = dynamic(() => import("@/components/sections/about"));
const SkillsSection = dynamic(() => import("@/components/sections/skills"));

export default async function Home() {
  const { isMobile } = await getHeadersData();
  return (
    <Fragment>
      <Navigation />
      <Header />
      <AboutMe isMobile={isMobile} />
      <SkillsSection />
      <ProjectsSection />
    </Fragment>
  );
}
