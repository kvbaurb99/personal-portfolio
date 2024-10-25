import dynamic from "next/dynamic";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/sections/projects";
import { headers } from "next/headers";
import MobileDetect from "mobile-detect";

// dynamic imports
const AboutMe = dynamic(() => import("@/components/sections/about"));
const BlogSection = dynamic(() => import("@/components/sections/blog"));
const ContactSection = dynamic(() => import("@/components/sections/contact"));
const SkillsSection = dynamic(() => import("@/components/sections/skills"));

export default function Home() {
  const headerList = headers();
  const userAgent = headerList.get("user-agent") || "";
  const md = new MobileDetect(userAgent);
  return (
    <>
      <Navigation />
      <Header />
      <AboutMe isMobile={Boolean(md.mobile())} />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
    </>
  );
}
