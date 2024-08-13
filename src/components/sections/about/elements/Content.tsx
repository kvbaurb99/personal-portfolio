import { AboutButton, AboutOverview, AboutTitle } from "../styles/about";
import { aboutData } from "@/data/sections/about/data";

export default function Content() {
  return (
    <div>
      <AboutTitle>{aboutData.title}</AboutTitle>
      <AboutOverview>{aboutData.overview}</AboutOverview>
      <AboutButton>Zamów wycenę strony internetowej</AboutButton>
    </div>
  );
}
