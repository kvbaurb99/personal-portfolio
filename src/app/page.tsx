import Footer from "@/components/footer";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import AboutMe from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <AboutMe />
      <SkillsSection />
      <Footer />
    </>
  );
}
