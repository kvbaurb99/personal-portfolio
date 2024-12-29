import { Section } from "@/styles/main";
import SectionImage from "@/assets/sections/about/woman-working-floor-from-home-with-device.jpg";
import { AboutImage } from "./styles/about";
import Content from "./elements/Content";

type Props = {
  reverse?: boolean;
};

export default function AboutMe({ reverse }: Props) {
  return (
    <Section $type="about" $reverse={reverse} id="about">
      <AboutImage src={SectionImage} height={360} width={420} alt="O mnie" />
      <Content />
    </Section>
  );
}
