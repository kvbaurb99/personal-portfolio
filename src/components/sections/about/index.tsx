import { Section } from "@/styles/main";
import { aboutData, aboutDataReverse } from "@/data/sections/about/data";
import SectionImage from "@/assets/sections/about/woman-working-floor-from-home-with-device.webp";
import SectionImageReverse from "@/assets/sections/about/desktop-with-laptop-mobile-phone_23-2148128771.webp";
import { AboutImage } from "./styles/about";
import Content from "./elements/Content";

type Props = {
  reverse?: boolean;
  isMobile: boolean;
};

export default function AboutMe({ reverse, isMobile }: Props) {
  const currentData = reverse ? aboutDataReverse : aboutData;
  return (
    <Section $type="about" $reverse={reverse} id="about">
      <AboutImage
        src={reverse ? SectionImageReverse : SectionImage}
        height={360}
        width={isMobile ? 260 : 420}
        loading="lazy"
        alt="O mnie"
      />
      <Content aboutData={currentData} />
    </Section>
  );
}
