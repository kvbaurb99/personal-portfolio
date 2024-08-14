import { Section } from "@/styles/main";
import Image from "next/image";
import SectionImage from "@/assets/sections/about/woman-working-floor-from-home-with-device.jpg";
import { AboutImage } from "./styles/about";
import Content from "./elements/Content";

export default function AboutMe() {
  return (
    <Section $type="about" id="about">
      <AboutImage
        src={SectionImage}
        height={360}
        width={420}
        alt="About me"
      />
      <Content />
    </Section>
  );
}
