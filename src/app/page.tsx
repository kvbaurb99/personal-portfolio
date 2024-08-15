import dynamic from "next/dynamic";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import OfferSection from "@/components/sections/offers";
import ProjectsSection from "@/components/sections/projects";

// dynamic imports
const AboutMe = dynamic(() => import("@/components/sections/about"));
const BlogSection = dynamic(() => import("@/components/sections/blog"));
const ContactSection = dynamic(() => import("@/components/sections/contact"));
const SkillsSection = dynamic(() => import("@/components/sections/skills"));

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <AboutMe />
      <OfferSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
