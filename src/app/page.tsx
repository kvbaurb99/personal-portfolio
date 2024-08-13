import Footer from "@/components/footer";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import AboutMe from "@/components/sections/about";
import BlogSection from "@/components/sections/blog";
import ContactSection from "@/components/sections/contact";
import OfferSection from "@/components/sections/offers";
import ProjectsSection from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <OfferSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </>
  );
}
