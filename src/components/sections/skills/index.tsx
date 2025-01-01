import { H2, Section } from "@/styles/main";
import { skills } from "@/data/sections/skills/data";
import {
  Skill,
  SkillBottomLine,
  SkillContainer,
  SkillsContainer,
} from "./styles/skills";

export default function SkillsSection() {
  return (
    <Section id="skills">
      <H2>Umiejętności techniczne</H2>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <SkillContainer key={index}>
            <h3 className="opacity-50">{skill.name}</h3>
            <div className="flex flex-wrap gap-2.5">
              {skill.items.map((item, index) => (
                <Skill
                  rel="nofollow noopener noreferrer"
                  href={item.link ? item.link : "#"}
                  key={index}
                  $isLink={item.link ? true : false}
                >
                  <h4>{item.name}</h4>
                  <SkillBottomLine $isLink={item.link ? true : false} />
                </Skill>
              ))}
            </div>
          </SkillContainer>
        ))}
      </SkillsContainer>
    </Section>
  );
}
