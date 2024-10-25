import { Section } from "@/styles/main";
import SectionImage from "@/assets/sections/about/woman-working-floor-from-home-with-device.jpg";
import { AboutImage } from "./styles/about";
import Content from "./elements/Content";

type Props = {
  isMobile: boolean;
};

export default function AboutMe({ isMobile }: Props) {
  return (
    <Section $type="about" id="about">
      <AboutImage
        priority={isMobile}
        src={SectionImage}
        height={360}
        width={420}
        alt="O mnie"
      />
      <Content />
    </Section>
  );
}
